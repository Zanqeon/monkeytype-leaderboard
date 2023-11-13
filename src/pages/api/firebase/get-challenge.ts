import { database } from '@app/services/firebase';
import { ChallengeData } from '@app/types/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405);
    return;
  }

  try {
    const snapshot = await getDocs(collection(database, 'challenges'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ChallengeData[];

    const getFullMonthName = (date: Date) =>
      date.toLocaleDateString(undefined, {
        month: 'long',
      });

    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth() + 1;
    const previousMonthAsDate = currentDate.setMonth(
      currentDate.getMonth() - 1
    );

    const previousRecordYear =
      currentMonth === 1 ? currentYear - 1 : currentYear;
    const previousRecordMonth = currentMonth === 1 ? 12 : currentMonth - 1;

    const nextRecordYear = currentMonth === 12 ? currentYear + 1 : currentYear;
    const nextRecordMonth = currentMonth === 12 ? 1 : currentMonth + 1;

    const getFormattedRecordDate = (timestamp: number) =>
      new Date(timestamp).toLocaleDateString(undefined, {
        month: '2-digit',
        day: '2-digit',
      });

    const currentChallenge = data.find(
      (element) => element.id === currentYear.toString()
    )?.[currentMonth] as any;

    const previousChallenge = data.find(
      (element) => element.id === previousRecordYear.toString()
    )?.[previousRecordMonth] as any;

    const nextChallenge = data.find(
      (element) => element.id === nextRecordYear.toString()
    )?.[nextRecordMonth] as any;

    const mappedChallengeData = {
      currentChallenge: {
        type: currentChallenge?.type,
        length: currentChallenge?.length,
        title: `${currentChallenge?.type} ${currentChallenge?.length}`,
        description: `${getFullMonthName(currentDate)} challenge`,
      },
      nextChallenge: {
        type: nextChallenge?.type,
        length: nextChallenge?.length,
        title: 'Coming up',
        description: `${nextChallenge?.type} ${nextChallenge?.length}`,
      },
      previousChallenge: {
        type: previousChallenge?.type,
        length: previousChallenge?.length,
        title: `Winner ${getFullMonthName(new Date(previousMonthAsDate))}`,
        description: `${previousChallenge?.type} ${previousChallenge?.length}`,
        ...(previousChallenge?.winner && {
          winner: {
            name: previousChallenge.winner?.name,
            image: previousChallenge.winner?.image,
            wordsPerMinute: previousChallenge.winner?.record?.wpm,
            accuracy: `${Math.floor(
              previousChallenge.winner?.record?.accuracy
            )}%`,
            date: getFormattedRecordDate(
              parseInt(previousChallenge.winner?.record?.timestamp)
            ),
          },
        }),
      },
    };

    res.json(mappedChallengeData);
  } catch (error) {
    throw error;
  }
}
