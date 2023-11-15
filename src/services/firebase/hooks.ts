import { useQuery } from 'react-query';

export const useFirebaseData = () => {
  return useQuery('get-firebase-user-data', async () => {
    const response = await fetch(`/api/firebase/get-users`);
    return response.json();
  });
};

export const useFireBaseChallenge = () => {
  return useQuery('get-firebase-challenge-data', async () => {
    const response = await fetch(`/api/firebase/get-challenge`);
    return response.json();
  });
};
