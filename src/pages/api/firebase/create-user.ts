import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getMonkeyTypeProfileByUsername } from '../monkey-type/helpers';
import { database } from '@app/services/firebase';

export const createUser = async (username: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;
  const currentTimeStamp = currentDate.valueOf();

  console.log('username', username);

  const { data: monkeyTypeProfile } =
    await getMonkeyTypeProfileByUsername(username);

    if (!monkeyTypeProfile.uid) return

  console.log('monkeyTypeProfile', monkeyTypeProfile);

  // const userRef = doc(database, 'users', monkeyTypeProfile.uid);
  // await setDoc(
  //   userRef,
  //   {
  //     username: monkeyTypeProfile.name,
  //     uid: monkeyTypeProfile.uid,
  //     createdAt: serverTimestamp(),
  //     lastUpdated: currentTimeStamp,
  //     discordId: monkeyTypeProfile.discordId,
  //     discordAvatar: monkeyTypeProfile.discordAvatar,
  //     image: `https://cdn.discordapp.com/avatars/${monkeyTypeProfile.discordId}/${monkeyTypeProfile.discordAvatar}.jpg`,
  //     records: {
  //       [currentYear]: {
  //         [currentMonth]: {
  //           time: {
  //             15: {},
  //             30: {},
  //             60: {},
  //             120: {},
  //           },
  //           words: {
  //             10: {},
  //             25: {},
  //             50: {},
  //             100: {},
  //           },
  //         },
  //       },
  //     },
  //   },
  //   { merge: true }
  // );
};
