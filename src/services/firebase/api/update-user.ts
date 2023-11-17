import { REGISTERED_USERS, mockResults } from '@app/content';
import { ChallengesData, UserData } from '@app/types/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { database } from '@app/services/firebase';
import { getCurrentRecord } from '@app/services/helpers/get-current-record';

export const updateUser = async (
  userData: UserData[],
  challenges: ChallengesData,
  username: string
) => {
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

  //   const monkeyTypeResultsForCurrentMonth = await getResults(username);
  const monkeyTypeResultsForCurrentMonth = mockResults.data;

  if (!monkeyTypeResultsForCurrentMonth.length) {
    console.log(`Couldn't retrieve the results of this month for ${username}.`);
    return;
  }

  const currentUserScore = userData.find((user) => user.username) as UserData;

  const currentChallenge =
    challenges[currentYear.toString()][currentMonth.toString()];

  const userScoreForCurrentChallenge =
    currentUserScore?.records?.[currentYear.toString()]?.[
      currentMonth.toString()
    ]?.[currentChallenge.type]?.[currentChallenge.length];

  const { bestRecordOfThisMonth } = getCurrentRecord({
    monkeyResults: monkeyTypeResultsForCurrentMonth,
    currentRecord: userScoreForCurrentChallenge,
    currentChallenge: currentChallenge,
  });

  console.log('bestRecordOfThisMonth', bestRecordOfThisMonth);

  const userRef = doc(database, 'users', username);
  await updateDoc(userRef, {
    username: currentUserData.username,
    displayName: displayName,
    lastUpdated: currentTimeStamp,
    showDiscordImage: showDiscordImage,
    ...(bestRecordOfThisMonth && {
      [`records.${currentYear}.${currentMonth}.${currentChallenge.type}.${currentChallenge.length}`]:
        bestRecordOfThisMonth,
    }),
  });
  console.log('Successfully updated user:', username);
};
