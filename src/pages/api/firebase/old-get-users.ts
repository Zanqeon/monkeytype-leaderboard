import { REGISTERED_USERS } from '@app/content';
import { database } from '@app/services/firebase';
import { ChallengeData, UserData } from '@app/types/firebase';
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
  console.log('getuser');

  try {
    const snapshot = await getDocs(collection(database, 'users'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as UserData[];

    const challengeSnapshot = await getDocs(collection(database, 'challenges'));
    const challengeData = challengeSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ChallengeData[];

    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth() + 1;

    const currentChallenge = challengeData.find(
      (element) => element.id === currentYear.toString()
    )?.[currentMonth] as any;

    const usersInDataBase = data.map((user) => user.id);
    const registeredUsers = REGISTERED_USERS.map((user) => user.username);
    const activeUsers = registeredUsers.filter((id) =>
      usersInDataBase.includes(id as string)
    );

    const userData = data
      .filter(
        (user) =>
          activeUsers.includes(user.id) &&
          user?.records?.[currentYear]?.[currentMonth]?.[
            currentChallenge.type // @ts-ignore
          ]?.[currentChallenge.length.toString()]?.wpm
      )
      .map((user) => {
        const wordsPerMinute =
          user.records[currentYear][currentMonth][currentChallenge.type][
            currentChallenge.length // @ts-ignore
          ].wpm;

        const accuracy = // @ts-ignore
          user.records[currentYear][currentMonth][currentChallenge.type][
            currentChallenge.length // @ts-ignore
          ].accuracy;

        const recordTimestamp = // @ts-ignore
          user.records[currentYear][currentMonth][currentChallenge.type][
            currentChallenge.length // @ts-ignore
          ].timestamp;

        const formattedRecordDate = recordTimestamp
          ? new Date(recordTimestamp).toLocaleDateString('en-GB', {
              month: '2-digit',
              day: '2-digit',
            })
          : '';

        return {
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          image: user.image,
          wordsPerMinute: Math.floor(wordsPerMinute),
          accuracy: Math.floor(accuracy),
          date: formattedRecordDate,
        };
      })
      .sort((a, b) => {
        return (
          b.wordsPerMinute - a.wordsPerMinute ||
          b.accuracy - a.accuracy ||
          b.date < a.date
        );
      });

    res.json(userData);
  } catch (error) {
    res.status(406);
    throw error;
  }
}
