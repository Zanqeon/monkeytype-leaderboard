import PageHeader from '@app/components/page-header';
import content, { DEFAULT_LEADERBOARD } from '@app/content';
import List from '@app/components/list';
import BottomSection from '@app/components/bottom-section';
import { useEffect } from 'react';
import { HomepageProps } from '@app/types/homepage';
import router from 'next/router';
import { mapChallenges } from '@app/utils/mappers/map-challenges';
import { mapCurrentChallengeLeaderboard } from '@app/utils/mappers/map-current-challenge-leaderboard';
import { ChallengesData, UserData } from '@app/types/firebase';
import {
  // checkChallengesToCreateOrUpdate,
  // checkUsersToCreateOrUpdate,
  getChallenges,
  getUsers,
} from '@app/services/firebase/api';

export default function Home({
  currentChallengeLeaderboard,
  previousChallenge,
  currentChallenge,
  nextChallenge,
  isLoading,
}: HomepageProps) {
  const REFRESH_TIME_IN_MS = 10000;

  // Force a router replace in order to serve the new data
  useEffect(() => {
    if (isLoading) {
      router.replace(router.asPath);
    }
    const id = setInterval(
      () => router.replace(router.asPath),
      REFRESH_TIME_IN_MS
    );
    return () => clearInterval(id);
  }, [isLoading]);

  if (!isLoading) {
    return (
      <>
        <PageHeader
          currentChallenge={currentChallenge}
          nextChallenge={nextChallenge}
        />
        <List
          {...content.monkeyTypeDate}
          items={currentChallengeLeaderboard || DEFAULT_LEADERBOARD}
        />
        <BottomSection previousChallenge={previousChallenge} />
      </>
    );
  }
}

export const getServerSideProps = async () => {
  const challenges: ChallengesData = await getChallenges();
  const users: UserData[] = await getUsers();
  // await checkUsersToCreateOrUpdate(users);
  // await checkChallengesToCreateOrUpdate(challenges, users);

  // if (Object.keys(users).length && Object.keys(challenges).length) {
  const { currentChallengeLeaderboard } = mapCurrentChallengeLeaderboard(
    users,
    challenges
  );
  const { previousChallenge, currentChallenge, nextChallenge } =
    mapChallenges(challenges);

  return {
    props: {
      previousChallenge,
      currentChallenge,
      nextChallenge,
      currentChallengeLeaderboard,
      challenges,
      isLoading: false,
    },
  };
  // }
};
