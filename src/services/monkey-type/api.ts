import { getMonkeyTypeProfile } from '@app/pages/api/monkey-type/get-profile';

export const getMonkeyTypeProfileByUsername = async (username: string) => {
  const data = await getMonkeyTypeProfile(username);
  return data;
};
