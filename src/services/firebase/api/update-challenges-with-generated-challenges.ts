import { ChallengeType } from '@app/types/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { database } from '@app/services/firebase';

export const updateChallengesWithGeneratedChallenges = async () => {
  const typeOptions = ['words', 'time'];
  const possibleOptionsForWords = [10, 25, 50, 100];
  const possibleOptionsForTime = [15, 30, 60, 120];

  const currentDate = new Date();
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
};
