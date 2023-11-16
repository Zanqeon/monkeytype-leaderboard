import { REGISTERED_USERS } from '@app/content';
import { database } from '@app/services/firebase';
import { UserData } from '@app/types/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const updateUser = async (username: string, userData: UserData[]) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;
  const currentTimeStamp = currentDate.valueOf();
  const currentUserData = userData.find(
    (user) => user.username === username
  ) as UserData;

  // Get user content from REGISTERED_USERS
  const userContent = REGISTERED_USERS.find(
    (user) => user.username === username
  );
  const displayName = userContent?.displayName || userContent?.username;
  // const apiKey = userContent?.apiKey;
  const showDiscordImage = userContent?.showDiscordImage || false;

  //TODO: Fetch user results from monkeyType here
  const startFetchFromTimeStamp = new Date(
    Date.UTC(currentYear, currentDate.getUTCMonth(), 1)
  );

  console.log('startFetchFromTimeStamp', startFetchFromTimeStamp);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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

  const userRef = doc(database, 'users', username);
  await updateDoc(userRef, {
    ...currentUserData,
    username: currentUserData.username,
    displayName: displayName,
    showDiscordImage: showDiscordImage,
    lastUpdated: currentTimeStamp,
    records: {
      ...currentUserData.records,
      [currentYear]: {
        ...currentUserData.records[currentYear],
        [currentMonth]: {
          ...currentUserData.records[currentYear][currentMonth],
          [type]: {
            ...currentUserData.records[currentYear][currentMonth][type],
            [length]: currentMonthRecord,
          },
        },
      },
    },
  });
  console.log('Successfully updated user:', username);
};
