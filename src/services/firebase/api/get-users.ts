import { UserData } from '@app/types/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { database } from '@app/services/firebase';

export const getUsers = async () => {
  const snapshot = await getDocs(collection(database, 'users'));
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return data as UserData[];
};
