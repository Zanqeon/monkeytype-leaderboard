import { ChallengeType, UserData } from '@app/types/firebase';

export interface IGetCurrentRecordProps {
  monkeyResults: any[];
  userData: UserData;
}

export function getCurrentMonthRecords({
  monkeyResults,
  userData,
}: IGetCurrentRecordProps) {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;

  const getMonkeyTypeResultsForChallenge = (challenge: {
    type: ChallengeType;
    length: number;
  }) =>
    monkeyResults
      .filter(
        (result) =>
          result.mode === challenge.type &&
          result.mode2 === challenge.length.toString()
      )
      .map((result) => ({
        wpm: Math.floor(result.wpm),
        timestamp: Math.floor(result.timestamp),
        accuracy: Math.floor(result.acc),
      }));

  const getBestChallengeResultMonkeyType = (challenge: {
    type: ChallengeType;
    length: number;
  }) => {
    const monkeyTypeResultsForChallenge =
      getMonkeyTypeResultsForChallenge(challenge);

    if (!monkeyTypeResultsForChallenge.length) return null;

    const bestMonkeyTypeResult = monkeyTypeResultsForChallenge.reduce(
      (highestRecord, recordToCheck) => {
        // Set highestRecord with first record to check
        if (!highestRecord) return recordToCheck;

        // Replace highestRecord with record when it has higher WPM than highestRecord
        if (recordToCheck.wpm > highestRecord.wpm) return recordToCheck;

        // Replace highestRecord with record when it has the same WPM but a higher accuracy than highestRecord (tiebreaker #1)
        if (
          recordToCheck.wpm === highestRecord.wpm &&
          recordToCheck.accuracy > highestRecord.accuracy
        )
          return recordToCheck;

        // Replace highestRecord with record when it has the same WPM and accuracy but a lower timestamp than highestRecord (tiebreaker #2)
        if (
          recordToCheck.wpm === highestRecord.wpm &&
          recordToCheck.accuracy === highestRecord.accuracy &&
          recordToCheck.timestamp < highestRecord.timestamp
        )
          return recordToCheck;

        //Return highestRecord if the recordToCheck is not better than the best one we came across so far
        return highestRecord;
      }
    );

    return bestMonkeyTypeResult;
  };

  const getBestResultOfThisMonth = (challenge: {
    type: ChallengeType;
    length: number;
  }) => {
    const bestChallengeResultMonkeyType =
      getBestChallengeResultMonkeyType(challenge);

    const currentRecordFromDatabase =
      userData.records?.[currentYear.toString()]?.[currentMonth.toString()]?.[
        challenge.type
      ]?.[challenge.length];

    if (!currentRecordFromDatabase) return bestChallengeResultMonkeyType;
    if (!bestChallengeResultMonkeyType) return currentRecordFromDatabase;

    // Replace highestRecord with record when it has higher WPM than highestRecord
    if (currentRecordFromDatabase.wpm > bestChallengeResultMonkeyType.wpm)
      return currentRecordFromDatabase;

    // Replace highestRecord with record when it has the same WPM but a higher accuracy than highestRecord (tiebreaker #1)
    if (
      currentRecordFromDatabase.wpm === bestChallengeResultMonkeyType.wpm &&
      currentRecordFromDatabase.accuracy >
        bestChallengeResultMonkeyType.accuracy
    )
      return currentRecordFromDatabase;

    // Replace highestRecord with record when it has the same WPM and accuracy but a lower timestamp than highestRecord (tiebreaker #2)
    if (
      currentRecordFromDatabase.wpm === bestChallengeResultMonkeyType.wpm &&
      currentRecordFromDatabase.accuracy ===
        bestChallengeResultMonkeyType.accuracy &&
      currentRecordFromDatabase.timestamp <
        bestChallengeResultMonkeyType.timestamp
    )
      return currentRecordFromDatabase;

    //Return highestRecord if the recordToCheck is not better than the best one we came across so far
    return bestChallengeResultMonkeyType;
  };

  const resultTime15 = getBestResultOfThisMonth({
    type: 'time',
    length: 15,
  });

  const resultTime30 = getBestResultOfThisMonth({
    type: 'time',
    length: 30,
  });

  const resultTime60 = getBestResultOfThisMonth({
    type: 'time',
    length: 60,
  });

  const resultTime120 = getBestResultOfThisMonth({
    type: 'time',
    length: 120,
  });

  const resultWords10 = getBestResultOfThisMonth({
    type: 'words',
    length: 10,
  });

  const resultWords25 = getBestResultOfThisMonth({
    type: 'words',
    length: 25,
  });

  const resultWords50 = getBestResultOfThisMonth({
    type: 'words',
    length: 50,
  });

  const resultWords100 = getBestResultOfThisMonth({
    type: 'words',
    length: 100,
  });

  const currentMonthRecords = {
    ...((resultTime15 || resultTime30 || resultTime60 || resultTime120) && {
      time: {
        ...(resultTime15 && { 15: resultTime15 }),
        ...(resultTime30 && { 30: resultTime30 }),
        ...(resultTime60 && { 60: resultTime60 }),
        ...(resultTime120 && { 120: resultTime120 }),
      },
    }),
    ...((resultWords10 || resultWords25 || resultWords50 || resultWords100) && {
      words: {
        ...(resultWords10 && { 10: resultWords10 }),
        ...(resultWords25 && { 25: resultWords25 }),
        ...(resultWords50 && { 50: resultWords50 }),
        ...(resultWords100 && { 100: resultWords100 }),
      },
    }),
  };

  return { currentMonthRecords };
}
