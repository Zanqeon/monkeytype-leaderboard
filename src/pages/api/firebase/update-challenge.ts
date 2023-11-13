import { database } from '@app/services/firebase';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405);
    return;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;

  const previousChallengeYear =
    currentMonth === 1 ? currentYear - 1 : currentYear;
  const previousChallengeMonth = currentMonth === 1 ? 12 : currentMonth - 1;

  try {
    const challengesSnapshot = await getDocs(
      collection(database, 'challenges')
    );
    const challengesData = challengesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // If there are no challenges yet for this year, generate them
    const currentYearChallenges = challengesData.find(
      (challenge) => challenge.id === currentYear.toString()
    );

    if (!currentYearChallenges) {
      const generateChallenge = () => {
        const getLengthOptionsByType = (type: 'words' | 'time') => {
          if (type === 'words') return [10, 25, 50, 100];
          if (type === 'time') return [15, 30, 60, 120];
          else return [];
        };
        const typeOptions = ['words', 'time'];

        const generatedType = typeOptions[
          Math.floor(Math.random() * typeOptions.length)
        ] as 'words' | 'time';

        const lengthOptions = getLengthOptionsByType(generatedType);
        const generatedLength =
          lengthOptions[Math.floor(Math.random() * lengthOptions.length)];

        return {
          type: generatedType,
          length: generatedLength,
        };
      };

      const currentYearChallengeRef = doc(
        database,
        'challenges',
        currentYear.toString()
      );

      await setDoc(currentYearChallengeRef, {
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
      });
    }

    if (currentYearChallenges) {
      const usersSnapshot = await getDocs(collection(database, 'users'));
      const usersData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as any[];

      const previousChallenge = challengesData.find(
        (challenge) =>
          challenge.id ===
          previousChallengeYear.toString()?.[previousChallengeMonth]
      ) as any;

      //Set record when there is no winner yet of last month
      if (!previousChallenge?.winner) {
        const eligibleWinners = usersData
          .filter(
            (user) =>
              user.records?.[previousChallengeYear]?.[previousChallengeMonth]?.[
                previousChallenge?.type
              ]?.[previousChallenge?.length]
          )
          .map((user) => ({
            name: user.nickname || user.name,
            record: {
              wpm: user.records?.[previousChallengeYear]?.[
                previousChallengeMonth
              ]?.[previousChallenge.type]?.[previousChallenge.length].wpm,
              accuracy:
                user.records?.[previousChallengeYear]?.[
                  previousChallengeMonth
                ]?.[previousChallenge.type]?.[previousChallenge.length]
                  ?.accuracy,
              timestamp:
                user.records?.[previousChallengeYear]?.[
                  previousChallengeMonth
                ]?.[previousChallenge.type]?.[previousChallenge.length]
                  ?.timestamp,
            },
          }));

        if (eligibleWinners.length > 0) {
          const previousWinner = eligibleWinners.reduce((prev, current) => {
            return prev && prev.record.wpm > current.record.wpm
              ? prev
              : current;
          });

          const previousChallengeRef = doc(
            database,
            'challenges',
            previousChallengeYear.toString()
          );

          const currentChallengesData = challengesData.find(
            (challenge) => challenge.id === previousChallengeYear.toString()
          );

          await updateDoc(previousChallengeRef, {
            ...currentChallengesData,
            [previousChallengeMonth]: {
              // @ts-ignore
              ...currentChallengesData[previousChallengeMonth],
              winner: previousWinner,
            },
          });
        }
      }
    }

    res.end();
  } catch (error) {
    throw error;
  }
}
