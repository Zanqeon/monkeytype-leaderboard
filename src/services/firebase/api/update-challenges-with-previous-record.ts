import { ChallengesData, UserData, Winner } from '@app/types/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { database } from '@app/services/firebase';

export const updateChallengesWithPreviousRecord = async (
  challenges: ChallengesData,
  users: UserData[]
) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;

  const previousChallengeYear =
    currentMonth === 1 ? currentYear - 1 : currentYear;
  const previousChallengeMonth = currentMonth === 1 ? 12 : currentMonth - 1;

  const previousChallenge =
    challenges[previousChallengeYear.toString()][
      previousChallengeMonth.toString()
    ];

  //Set record when there is no winner yet of last month
  if (!previousChallenge.winner) {
    const eligibleWinners = users
      .filter(
        (user) =>
          user.records?.[previousChallengeYear]?.[previousChallengeMonth]?.[
            previousChallenge?.type
          ]?.[previousChallenge?.length]
      )
      .map((user) => {
        const userRecordPreviousChallenge =
          user.records[previousChallengeYear][previousChallengeMonth][
            previousChallenge?.type
          ][previousChallenge?.length];

        return {
          displayName: user.displayName,
          username: user.username,
          showDiscordImage: user.showDiscordImage,
          ...(user.image && { image: user.image }),
          record: {
            wpm: userRecordPreviousChallenge.wpm,
            accuracy: userRecordPreviousChallenge.accuracy,
            timestamp: userRecordPreviousChallenge.timestamp,
          },
        };
      });

    // If there are people with a score for the challenge last month, decide the winner by checking the highest WPM, then accuracy, and as a final tiebreaker the timestamp
    if (eligibleWinners.length > 0) {
      const previousWinner: Winner = eligibleWinners.reduce(
        (highestRecord, recordToCheck) => {
          // Set highestRecord with first record to check
          if (!highestRecord) return recordToCheck;

          // Replace highestRecord with record when it has higher WPM than highestRecord
          if (recordToCheck.record.wpm > highestRecord.record.wpm)
            return recordToCheck;

          // Replace highestRecord with record when it has the same WPM but a higher accuracy than highestRecord (tiebreaker #1)
          if (
            recordToCheck.record.wpm === highestRecord.record.wpm &&
            recordToCheck.record.accuracy > highestRecord.record.accuracy
          )
            return recordToCheck;

          // Replace highestRecord with record when it has the same WPM and accuracy but a lower timestamp than highestRecord (tiebreaker #2)
          if (
            recordToCheck.record.wpm === highestRecord.record.wpm &&
            recordToCheck.record.accuracy === highestRecord.record.accuracy &&
            recordToCheck.record.timestamp < highestRecord.record.timestamp
          )
            return recordToCheck;

          //Return highestRecord if the recordToCheck is not better than the best one we came across so far
          return highestRecord;
        }
      );
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
    }
  }
};
