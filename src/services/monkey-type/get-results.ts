import { getMonkeyTypeResults } from '@app/pages/api/monkey-type/get-results';

export const getResults = async (username: string) => {
  const data = await getMonkeyTypeResults(username);
  return data;
};
