import { REGISTERED_USERS } from '@app/content';

export const getMonkeyTypeResults = async (username: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();

  const firstDayOfThisMonth = new Date(
    Date.UTC(currentYear, currentDate.getUTCMonth(), 1)
  );
  const timestamp = firstDayOfThisMonth.valueOf();

  // TODO: Type return type
  const apiKey = REGISTERED_USERS.find(
    (user) => user.username?.toLowerCase() === username.toLowerCase()
  )?.apiKey;

  const response = await fetch(
    `https://api.monkeytype.com/results?onOrAfterTimestamp=${timestamp}`,
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
