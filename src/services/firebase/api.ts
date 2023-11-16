import { REGISTERED_USERS } from '@app/content';
import { createUser } from '@app/pages/api/firebase/create-user';
import { updateChallengesWithWinner } from '@app/pages/api/firebase/update-challenges-with-winner';
import { updateChallengesWithGeneratedChallenges } from '@app/pages/api/firebase/update-challenges-with-generated-challenges';
import { updateUser } from '@app/pages/api/firebase/update-user';
import { ChallengesData, UserData, Winner } from '@app/types/firebase';

export const getUsers = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/firebase/get-users`);
  return await res.json();
};

export const getChallenges = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/firebase/get-challenges`
  );
  return await res.json();
};

export const checkUsersToCreateOrUpdate = async (userData: UserData[]) => {
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

  if (usersToCreate.length) {
    console.log('Trying to create new users');

    usersToCreate.forEach(async (user) => {
      await createUser(user);
    });
  }

  // Check if there are users that have last been updated more than an hour ago
  const usersInDataBaseToUpdate = userData
    .filter((user) => user.lastUpdated < timestampOneHourAgo)
    .map((users) => users.username);
  const usersToUpdate = registeredUsers.filter((username) =>
    usersInDataBaseToUpdate.includes(username)
  );

  if (usersToUpdate.length) {
    console.log('Trying to update users');
    usersToUpdate.forEach(async (user) => {
      await updateUser(user, userData);
    });
  }
};

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
        await updateChallengesWithWinner(challenges, previousWinner);
      }
    }
  }
};
