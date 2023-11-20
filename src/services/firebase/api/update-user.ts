import {
  REGISTERED_USERS,
  // mockResults
} from '@app/content';
import { UserData } from '@app/types/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { database } from '@app/services/firebase';
import { getCurrentMonthRecords } from '@app/services/helpers/get-current-month-records';
import { getMonkeyTypeResults } from '@app/services/monkey-type/api/get-results';

export const updateUser = async (userData: UserData[], username: string) => {
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
  const showDiscordImage = userContent?.showDiscordImage || false;

  const { data: monkeyTypeResultsForCurrentMonth } =
    await getMonkeyTypeResults(username);
  // const monkeyTypeResultsForCurrentMonth = mockResults.data;

  const { currentMonthRecords } = getCurrentMonthRecords({
    monkeyResults: monkeyTypeResultsForCurrentMonth,
    userData: currentUserData,
  });

  const userRef = doc(database, 'users', username);
  await updateDoc(userRef, {
    username: currentUserData.username,
    displayName: displayName,
    lastUpdated: currentTimeStamp,
    showDiscordImage: showDiscordImage,
    ...(currentMonthRecords && {
      [`records.${currentYear}.${currentMonth}`]: currentMonthRecords,
    }),
  });

  console.log(`Successfully updated user ${username}`);
};
