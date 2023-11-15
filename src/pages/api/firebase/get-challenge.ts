import { database } from '@app/services/firebase';
import { ChallengeData } from '@app/types/firebase';
import { mapChallenges } from '@app/utils/mappers/map-previous-winner';
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

    const mappedChallengeData = mapChallenges(data)

    res.json(mappedChallengeData);
  } catch (error) {
    throw error;
  }
}
