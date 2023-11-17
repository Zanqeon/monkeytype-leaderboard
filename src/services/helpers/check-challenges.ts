import { updateChallengesWithPreviousRecord } from '@app/services/firebase/api/update-challenges-with-previous-record';
import { updateChallengesWithGeneratedChallenges } from '@app/services/firebase/api/update-challenges-with-generated-challenges';
import { ChallengesData, UserData } from '@app/types/firebase';

export const checkChallengesToCreateOrUpdate = async (
  challenges: ChallengesData,
  users: UserData[]
) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;

  const previousChallengeYear =
    currentMonth === 1 ? currentYear - 1 : currentYear;
  const previousChallengeMonth = currentMonth === 1 ? 12 : currentMonth - 1;

  const currentYearChallenges = challenges[currentYear.toString()];

  // If there are no challenges yet for this year, generate them and push them to firebase
  if (!currentYearChallenges) {
    await updateChallengesWithGeneratedChallenges();
  }

  if (currentYearChallenges) {
    const previousChallenge =
      challenges[previousChallengeYear.toString()][
        previousChallengeMonth.toString()
      ];

    //Set record when there is no winner yet of last month
    if (!previousChallenge.winner) {
      await updateChallengesWithPreviousRecord(challenges, users);
    }
  }
};
