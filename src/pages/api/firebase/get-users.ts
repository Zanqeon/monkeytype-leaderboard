import { database } from '@app/services/firebase';
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';

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
    }));

    res.json(data);
  } catch (error) {
    res.status(406);
    throw error;
  }
}
