import { ChallengesData } from '@app/types/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '@app/services/firebase';

export const getChallenges = async () => {
  const docRef = doc(database, 'challenges', 'default');
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data as ChallengesData;
};
