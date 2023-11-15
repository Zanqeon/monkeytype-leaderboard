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
  console.log('getuser');

  try {
    const snapshot = await getDocs(collection(database, 'users'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as UserData[];

    res.json(data);
  } catch (error) {
    res.status(406);
    throw error;
  }
}
