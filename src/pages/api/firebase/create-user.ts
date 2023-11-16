import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getMonkeyTypeProfileByUsername } from '../monkey-type/helpers';
import { database } from '@app/services/firebase';
import { REGISTERED_USERS } from '@app/content';

export const createUser = async (username: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth() + 1;
  const currentTimeStamp = currentDate.valueOf();

  const { data: monkeyTypeProfile } =
    await getMonkeyTypeProfileByUsername(username);

  if (!monkeyTypeProfile.uid) {
    console.log(
      `Couldn't create user ${username}. No MonkeyType profile found with this username.`
    );
    return;
  }

  const displayName = REGISTERED_USERS.find(
    (user) => user.username === username
  )?.displayName;

  const userRef = doc(database, 'users', monkeyTypeProfile.name);
  await setDoc(
    userRef,
    {
      username: monkeyTypeProfile.name,
      displayName: displayName || monkeyTypeProfile.name,
      uid: monkeyTypeProfile.uid,
      createdAt: serverTimestamp(),
      lastUpdated: currentTimeStamp,
      ...(monkeyTypeProfile.discordId &&
        monkeyTypeProfile.discordAvatar && {
          discordId: monkeyTypeProfile.discordId,
          discordAvatar: monkeyTypeProfile.discordAvatar,
          image: `https://cdn.discordapp.com/avatars/${monkeyTypeProfile.discordId}/${monkeyTypeProfile.discordAvatar}.jpg`,
        }),
      records: {
        [currentYear]: {
          [currentMonth]: {
            time: {
              15: {},
              30: {},
              60: {},
              120: {},
            },
            words: {
              10: {},
              25: {},
              50: {},
              100: {},
            },
          },
        },
      },
    },
    { merge: true }
  );
  console.log('Successfully created user:', username);
};
