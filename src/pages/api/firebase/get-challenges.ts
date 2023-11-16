import { database } from '@app/services/firebase';
import { doc, getDoc } from 'firebase/firestore';
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
    const docRef = doc(database, 'challenges', 'default');
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    res.json(data);
  } catch (error) {
    throw error;
  }
}
