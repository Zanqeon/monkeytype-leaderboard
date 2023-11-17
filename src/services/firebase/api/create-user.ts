import { REGISTERED_USERS } from '@app/content';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { database } from '@app/services/firebase';
import { getProfile } from '@app/services/monkey-type/get-profile';

export const createUser = async (username: string) => {
  const currentDate = new Date();
  const currentTimeStamp = currentDate.valueOf();

  const { data: monkeyTypeProfile } = await getProfile(username);

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
    },
    { merge: true }
  );
  console.log('Successfully created user:', username);
};
