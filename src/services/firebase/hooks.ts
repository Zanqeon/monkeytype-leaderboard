import { useQuery } from 'react-query';

export const useFirebaseData = () => {
  return useQuery('get-firebase-user-data', async () => {
    const response = await fetch(`/api/firebase/get-data`);
    return response.json();
  });
};

export const useUpdateFirebaseData = () => {
  return useQuery('update-firebase-data', async () => {
    const response = await fetch(`/api/firebase/update-data`);
    return response.json();
  });
};

export const useFireBaseChallenge = () => {
  return useQuery('get-firebase-challenge-data', async () => {
    const response = await fetch(`/api/firebase/get-challenge`);
    return response.json();
  });
};

export const useUpdateFireBaseChallenge = () => {
  return useQuery('get-firebase-challenge-data', async () => {
    const response = await fetch(`/api/firebase/update-challenge`);
    return response.json();
  });
};
