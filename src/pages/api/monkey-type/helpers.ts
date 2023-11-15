import { REGISTERED_USERS } from '@app/content';

export const getMonkeyTypeProfileByUsername: any = async (username: string) => {
  const apiKey = REGISTERED_USERS.find(
    (user) => user.username?.toLowerCase() === username.toLowerCase()
  )?.apiKey;

  const response = await fetch(
    `https://api.monkeytype.com/users/${username}/profile`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `ApeKey ${apiKey}`,
      },
    }
  );
  return response.json();
};
