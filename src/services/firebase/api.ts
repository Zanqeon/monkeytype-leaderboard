import { REGISTERED_USERS } from '@app/content';
import {
  ChallengeType,
  ChallengesData,
  UserData,
  Winner,
} from '@app/types/firebase';
import { getMonkeyTypeProfileByUsername } from '../monkey-type/api';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { database } from '.';

export const getUsers = async () => {
  const snapshot = await getDocs(collection(database, 'users'));
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return data as UserData[];
};

export const getChallenges = async () => {
  const docRef = doc(database, 'challenges', 'default');
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data as ChallengesData;
};

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

  if (usersToCreate.length) {
    usersToCreate.forEach(async (username) => {
      const currentTimeStamp = currentDate.valueOf();

      const { data: monkeyTypeProfile } =
        await getMonkeyTypeProfileByUsername(username);

      if (!monkeyTypeProfile.uid) {
        console.log(
          `Couldn't create user ${username}. No MonkeyType profile found with this username.`
        );
        return;
      }

      const displayName = REGISTERED_USERS.find(
        (user) => user.username === username
      )?.displayName;

      const userRef = doc(database, 'users', monkeyTypeProfile.name);
      await setDoc(
        userRef,
        {
          username: monkeyTypeProfile.name,
          displayName: displayName || monkeyTypeProfile.name,
          uid: monkeyTypeProfile.uid,
          createdAt: serverTimestamp(),
          lastUpdated: currentTimeStamp,
          ...(monkeyTypeProfile.discordId &&
            monkeyTypeProfile.discordAvatar && {
              discordId: monkeyTypeProfile.discordId,
              discordAvatar: monkeyTypeProfile.discordAvatar,
              image: `https://cdn.discordapp.com/avatars/${monkeyTypeProfile.discordId}/${monkeyTypeProfile.discordAvatar}.jpg`,
            }),
        },
        { merge: true }
      );
      console.log('Successfully created user:', username);
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
    usersToUpdate.forEach(async (username) => {
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
      const length = 30;

      const currentMonthRecord = {
        // TODO: Get results from monkeyType based on timestamp, filter best result of month
        wpm: getRandomInt(70, 120),
        accuracy: getRandomInt(60, 100),
        timestamp: getRandomInt(1698800400000, 1701392400),
      };

      // TODO: Check against best result on the store
      // If WPM from the fetched info is better than the one in firestore, do updateDoc
      const currentUserScore = userData.find(
        (user) => user.username
      ) as UserData;

      const currentChallenge =
        challenges[currentYear.toString()][currentMonth.toString()];

      const userScoreForCurrentChallenge =
        currentUserScore?.records?.[currentYear.toString()]?.[
          currentMonth.toString()
        ]?.[currentChallenge.type]?.[currentChallenge.length];

      const userRef = doc(database, 'users', username);
      await updateDoc(userRef, {
        username: currentUserData.username,
        displayName: displayName,
        lastUpdated: currentTimeStamp,
        showDiscordImage: showDiscordImage,
        ...(userScoreForCurrentChallenge && {
          [`records.${currentYear}.${currentMonth}.${type}.${length}`]:
            currentMonthRecord,
        }),
      });
      console.log('Successfully updated user:', username);
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
    const typeOptions = ['words', 'time'];
    const possibleOptionsForWords = [10, 25, 50, 100];
    const possibleOptionsForTime = [15, 30, 60, 120];

    const currentYear = currentDate.getUTCFullYear();

    const generateChallenge = () => {
      const getLengthOptionsByType = (type: ChallengeType) => {
        if (type === 'words') return possibleOptionsForWords;
        if (type === 'time') return possibleOptionsForTime;
        else return [];
      };

      // We randomly generate type 'time' or 'words'
      const generatedType = typeOptions[
        Math.floor(Math.random() * typeOptions.length)
      ] as ChallengeType;

      // We randomly generate a length based on the options corresponding to the type we generated
      const lengthOptions = getLengthOptionsByType(generatedType);
      const generatedLength =
        lengthOptions[Math.floor(Math.random() * lengthOptions.length)];

      return {
        type: generatedType,
        length: generatedLength,
      };
    };

    const listOfChallenges = {
      [currentYear]: {
        1: generateChallenge(),
        2: generateChallenge(),
        3: generateChallenge(),
        4: generateChallenge(),
        5: generateChallenge(),
        6: generateChallenge(),
        7: generateChallenge(),
        8: generateChallenge(),
        9: generateChallenge(),
        10: generateChallenge(),
        11: generateChallenge(),
        12: generateChallenge(),
      },
    };

    const currentYearChallengeRef = doc(database, 'challenges', 'default');
    await setDoc(currentYearChallengeRef, listOfChallenges, { merge: true });

    console.log(`Successfully added new challenges for ${currentYear}`);
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
        const currentYear = currentDate.getUTCFullYear();
        const currentMonth = currentDate.getUTCMonth() + 1;
        const previousChallengeYear =
          currentMonth === 1 ? currentYear - 1 : currentYear;
        const previousChallengeMonth =
          currentMonth === 1 ? 12 : currentMonth - 1;

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
  }
};
