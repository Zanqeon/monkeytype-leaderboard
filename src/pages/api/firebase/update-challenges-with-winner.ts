import { database } from '@app/services/firebase';
import { ChallengesData, Winner } from '@app/types/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const updateChallengesWithWinner = async (
  challenges: ChallengesData,
  previousWinner: Winner
) => {
  console.log('Adding winner for challenge previous month');

  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;
  const previousChallengeYear =
    currentMonth === 1 ? currentYear - 1 : currentYear;
  const previousChallengeMonth = currentMonth === 1 ? 12 : currentMonth - 1;

  const databaseChallengesRef = doc(database, 'challenges', 'default');
  await updateDoc(databaseChallengesRef, {
    ...challenges,
    [previousChallengeYear.toString()]: {
      ...challenges[previousChallengeYear.toString()],
      [previousChallengeMonth.toString()]: {
        ...challenges[previousChallengeYear.toString()][
          previousChallengeMonth.toString()
        ],
        winner: previousWinner,
      },
    },
  });
  console.log(
    `Successfully added ${previousWinner.displayName} as winner of ${previousChallengeMonth}-${previousChallengeYear}`
  );
};
