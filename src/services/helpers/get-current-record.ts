import { ChallengeType } from '@app/types/firebase';

export interface IGetCurrentRecordProps {
  monkeyResults: any[];
  currentRecord: {
    timestamp: number;
    wpm: number;
    accuracy: number;
  };
  currentChallenge: {
    type: ChallengeType;
    length: number;
  };
}

export function getCurrentRecord({
  monkeyResults,
  currentRecord,
  currentChallenge,
}: IGetCurrentRecordProps) {
  const monkeyResultsForCurrentChallenge = monkeyResults
    .filter(
      (result) =>
        result.mode === currentChallenge.type.toString() &&
        result.mode2 === currentChallenge.length.toString()
    )
    .map((result) => ({
      wpm: Math.floor(result.wpm),
      timestamp: Math.floor(result.timestamp),
      accuracy: Math.floor(result.acc),
    }));

  const bestMonkeyTypeResultOfThisMonth =
    monkeyResultsForCurrentChallenge.reduce((highestRecord, recordToCheck) => {
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
    });

  const getBestResultOfThisMonth = () => {
    if (!currentRecord) return bestMonkeyTypeResultOfThisMonth;
    // Replace highestRecord with record when it has higher WPM than highestRecord
    if (currentRecord.wpm > bestMonkeyTypeResultOfThisMonth.wpm)
      return currentRecord;

    // Replace highestRecord with record when it has the same WPM but a higher accuracy than highestRecord (tiebreaker #1)
    if (
      currentRecord.wpm === bestMonkeyTypeResultOfThisMonth.wpm &&
      currentRecord.accuracy > bestMonkeyTypeResultOfThisMonth.accuracy
    )
      return currentRecord;

    // Replace highestRecord with record when it has the same WPM and accuracy but a lower timestamp than highestRecord (tiebreaker #2)
    if (
      currentRecord.wpm === bestMonkeyTypeResultOfThisMonth.wpm &&
      currentRecord.accuracy === bestMonkeyTypeResultOfThisMonth.accuracy &&
      currentRecord.timestamp < bestMonkeyTypeResultOfThisMonth.timestamp
    )
      return currentRecord;

    //Return highestRecord if the recordToCheck is not better than the best one we came across so far
    return bestMonkeyTypeResultOfThisMonth;
  };

  const bestRecordOfThisMonth = getBestResultOfThisMonth();

  return { bestRecordOfThisMonth };
}
