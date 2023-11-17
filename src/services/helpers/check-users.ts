import { REGISTERED_USERS } from '@app/content';
import { ChallengesData, UserData } from '@app/types/firebase';
import { updateUser } from '@app/services/firebase/api/update-user';
import { createUser } from '@app/services/firebase/api/create-user';

export const checkUsersToCreateOrUpdate = async (
  challenges: ChallengesData,
  userData: UserData[]
) => {
  const currentDate = new Date();
  const timestampOneHourAgo = currentDate.valueOf() - 3600000;

  // Check if there are new users that have to be created in the database
  const usersInDataBase = userData.map((user) => user.username);
  const registeredUsers = REGISTERED_USERS.filter((user) => user.username).map(
    (user) => user.username
  );

  const usersToCreate = registeredUsers.filter(
    (username) => !usersInDataBase.includes(username)
  );

  // Check if there are users that have last been updated more than an hour ago
  const usersInDataBaseWithExpiredTimestamp = userData
    .filter((user) => user.lastUpdated < timestampOneHourAgo)
    .map((users) => users.username);

  const usersToUpdate = registeredUsers.filter((username) =>
    usersInDataBaseWithExpiredTimestamp.includes(username)
  );

  if (usersToCreate.length) {
    usersToCreate.forEach(async (username) => {
      await createUser(username);
    });
  }

  if (usersToUpdate.length) {
    usersToUpdate.forEach(async (username) => {
      await updateUser(userData, challenges, username);
    });
  }
};
