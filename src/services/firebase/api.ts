import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { database } from '@app/services/firebase';
import { REGISTERED_USERS } from '@app/content';
import { PreviousWinnerType, UserData } from '@app/types/firebase';

export const fetchFirebaseData = async (): Promise<UserData[]> => {
  const snapshot = await getDocs(collection(database, 'users'));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data as UserData[];
};

const updateUser = async (userId: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;
  const currentTimeStamp = currentDate.valueOf();
  const currentUserData = (await fetchFirebaseData()).filter(
    (user) => user.id === userId
  )[0];

  const nickname = REGISTERED_USERS.find((user) => user.id === userId)
    ?.nickname;
  const apiKey = REGISTERED_USERS.find((user) => user.id === userId)?.apiKey;

  //TODO: Fetch user data from monkeyType here
  console.log('apiKey', apiKey);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const name = 'Zanqeon'; // get name from monkeyType
  const type = 'time';
  const lengths = [15, 30, 60, 120];
  const length = lengths[Math.floor(Math.random() * lengths.length)]; //TODO: replace with length from monkeyType

  const currentMonthRecord = {
    // TODO: Get results from monkeyType based on timestamp, filter best result of month
    wpm: getRandomInt(70, 120),
    accuracy: getRandomInt(60, 100),
    timestamp: 1661422227974,
  };

  // TODO: Check against best result on the store
  // If WPM from the fetched info is better than the one in firestore, do updateDoc

  const userRef = doc(database, 'users', userId);
  await updateDoc(userRef, {
    ...currentUserData,
    name: name,
    nickname: nickname,
    lastUpdated: currentTimeStamp,
    records: {
      ...currentUserData.records,
      [currentYear]: {
        ...currentUserData.records[currentYear],
        [currentMonth]: {
          ...currentUserData.records[currentYear][currentMonth],
          [type]: {
            // @ts-ignore
            ...currentUserData.records[currentYear][currentMonth][type],
            [length]: currentMonthRecord,
          },
        },
      },
    },
  });
};

const createUser = async (userId: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;
  const currentTimeStamp = currentDate.valueOf();

  //Fetch user profile here
  const name = 'Zanqeon';
  const discordId = '230787092148387840';
  const discordAvatar = '8e35fd0c16f01ca3d957798440a70058';

  const userRef = doc(database, 'users', userId);
  await setDoc(userRef, {
    name: name,
    lastUpdated: currentTimeStamp,
    discordId: discordId,
    discordAvatar: discordAvatar,
    image: `https://cdn.discordapp.com/avatars/${discordId}/${discordAvatar}.jpg`,
    records: {
      [currentYear]: {
        [currentMonth]: {
          time: {
            15: {},
            30: {},
            60: {},
            120: {},
          },
          words: {
            10: {},
            25: {},
            50: {},
            100: {},
          },
        },
      },
    },
  });

  await updateUser(userId);
};

export const updateUsers = async () => {
  console.log('updating users');
  const data = await fetchFirebaseData();
  const currentDate = new Date();
  const timestampOneHourAgo = currentDate.valueOf() - 3600000;

  // Check if there are new users that have to be created in the database
  const usersInDataBase = data.map((user) => user.id);
  const registeredUsers = REGISTERED_USERS.map((user) => user.id);
  const usersToCreate = registeredUsers.filter(
    (id) => !usersInDataBase.includes(id)
  );

  usersToCreate.forEach((user) => {
    createUser(user);
  });

  // Check if there are users that have last been updated more than an hour ago
  const usersInDataBaseToUpdate = data
    .filter((user) => user.lastUpdated < timestampOneHourAgo)
    .map((users) => users.id);

  const usersToUpdate = registeredUsers.filter((id) =>
    usersInDataBaseToUpdate.includes(id)
  );

  usersToUpdate.forEach((user) => {
    updateUser(user);
  });
};

export const getPreviousWinner = async (): Promise<PreviousWinnerType> => {
  const data = await fetchFirebaseData();
  // TODO: find out the best WPM result of last months challenge
  // TODO: write challenges to database
  const user = data.filter((user: UserData) => user.id === '0000001')[0];

  const wpm = 102;
  const accuracy = 88;

  return {
    name: user.name,
    nickname: user.nickname,
    wpm: wpm,
    accuracy: accuracy,
    image: user?.image,
  };
};
