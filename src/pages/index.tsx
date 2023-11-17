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
  checkChallengesToCreateOrUpdate,
  checkUsersToCreateOrUpdate,
  getChallenges,
  getUsers,
} from '@app/services/firebase/api';
import PageLoadingIndicator, {
  LOADING_MESSAGES,
} from '@app/components/page-loading-indicator';

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
      setTimeout(
        () => {
          router.replace(router.asPath);
          //
        },
        LOADING_MESSAGES.length * 1.5 * 1000 + 500 + 1000
      );
    }
    const id = setInterval(
      () => router.replace(router.asPath),
      REFRESH_TIME_IN_MS
    );
    return () => clearInterval(id);
  }, [isLoading]);

  return isLoading ? (
    <PageLoadingIndicator />
  ) : (
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

export const getServerSideProps = async () => {
  const challenges: ChallengesData = await getChallenges();
  const users: UserData[] = await getUsers();

  const currentYear = new Date().getUTCFullYear();
  const challengesOfThisYear = challenges?.[currentYear];

  await checkUsersToCreateOrUpdate(challenges, users);
  await checkChallengesToCreateOrUpdate(challenges, users);

  const usersAndChallengesOfThisYearExist =
    Object.keys(users).length && challengesOfThisYear;
  const mappedChallenges = mapChallenges(challenges);

  const currentChallengeLeaderboard = mapCurrentChallengeLeaderboard(
    users,
    challenges
  );

  return {
    props: {
      previousChallenge: mappedChallenges.previousChallenge,
      currentChallenge: mappedChallenges.currentChallenge,
      nextChallenge: mappedChallenges.nextChallenge,
      currentChallengeLeaderboard,
      isLoading: !usersAndChallengesOfThisYearExist,
    },
  };
};
