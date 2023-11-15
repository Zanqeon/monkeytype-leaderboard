import { REGISTERED_USERS } from '@app/content';
import { database } from '@app/services/firebase';
import { UserData } from '@app/types/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from './create-user';
import { updateUser } from './update-user';

const fetchFirebaseData = async (): Promise<UserData[]> => {
  const snapshot = await getDocs(collection(database, 'users'));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data as UserData[];
};

export const checkUsersToCreateOrUpdate = async () => {
  const userData = await fetchFirebaseData();
  const currentDate = new Date();
  const timestampOneHourAgo = currentDate.valueOf() - 3600000;

  // Check if there are new users that have to be created in the database
  const usersInDataBase = userData.map((user) => user.id); // TODO: Check the username, instead of the UID
  const registeredUsers = REGISTERED_USERS.filter((user) => user.username).map(
    (user) => user.username
  ) as [];
  const usersToCreate = registeredUsers.filter(
    (username) => !usersInDataBase.includes(username)
  );

  if (usersToCreate.length) {
    usersToCreate.forEach(async (user) => {
      await createUser(user);
    });
  }

  // Check if there are users that have last been updated more than an hour ago
  const usersInDataBaseToUpdate = userData
    .filter((user) => user.lastUpdated < timestampOneHourAgo)
    .map((users) => users.id);
  const usersToUpdate = registeredUsers.filter((id) =>
    usersInDataBaseToUpdate.includes(id as string)
  );

  if (usersToUpdate.length) {
    usersToUpdate.forEach(async (user) => {
      await updateUser(user as string, userData);
    });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405);
    return;
  }

  try {
    await checkUsersToCreateOrUpdate();
    res.end();
  } catch (error) {
    throw error;
  }
}
