import { REGISTERED_USERS } from '@app/content';

export const getMonkeyTypeProfile = async (username: string) => {
  // TODO: Type return type
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
