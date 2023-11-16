import { NextApiRequest, NextApiResponse } from 'next';
import { getMonkeyTypeProfileByUsername } from './helpers';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405);
    return;
  }

  const usernameToFetch = 'Zanqeon';

  try {
    const { data: monkeyTypeProfile } =
      await getMonkeyTypeProfileByUsername(usernameToFetch);

    const mappedMonkeyTypeProfile = {
      name: monkeyTypeProfile.name,
      discordId: monkeyTypeProfile.discordId,
      discordAvatar: monkeyTypeProfile.discordAvatar,
      uid: monkeyTypeProfile.uid,
    };

    res.json(mappedMonkeyTypeProfile);
  } catch (error) {
    throw error;
  }
}
