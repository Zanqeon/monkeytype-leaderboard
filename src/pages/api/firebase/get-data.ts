import { database } from '@app/services/firebase';
import { UserData } from '@app/types/firebase';
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
    const snapshot = await getDocs(collection(database, 'users'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as UserData[];

    const userData = data
      .map((user) => {
        const currentDate = new Date();
        const currentYear = currentDate.getUTCFullYear();
        const currentMonth = currentDate.getUTCMonth() + 1;
        const currentChallenge = 'time';
        const currentLength = 30;

        const wordsPerMinute = // @ts-ignore
          user.records[currentYear][currentMonth][currentChallenge][
            currentLength
          ].wpm;

        const accuracy = // @ts-ignore
          user.records[currentYear][currentMonth][currentChallenge][
            currentLength
          ].accuracy;

        const recordTimestamp = // @ts-ignore
          user.records[currentYear][currentMonth][currentChallenge][
            currentLength
          ].timestamp;

        const formattedRecordDate = recordTimestamp
          ? new Date(recordTimestamp).toLocaleDateString(undefined, {
              month: '2-digit',
              day: '2-digit',
            })
          : '';

        return {
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          image: user.image,
          wordsPerMinute: wordsPerMinute ? Math.floor(wordsPerMinute) : 0,
          accuracy: accuracy ? Math.floor(accuracy) : 0,
          date: formattedRecordDate,
        };
      })
      // @ts-ignore
      .sort((a, b) => {
        return (
          b.wordsPerMinute - a.wordsPerMinute ||
          b.accuracy - a.accuracy ||
          b.date < a.date
        );
      });

    res.json(userData);
  } catch (error) {
    throw error;
  }
}
