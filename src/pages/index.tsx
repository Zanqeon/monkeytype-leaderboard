import PageHeader from '@app/components/page-header';
import { DEFAULT_LEADERBOARD } from '@app/content';
import List from '@app/components/list';
import BottomSection from '@app/components/bottom-section';
import { useEffect } from 'react';
import { HomepageProps } from '@app/types/homepage';
import router from 'next/router';
import { mapChallenges } from '@app/utils/mappers/map-challenges';
import { mapCurrentChallengeLeaderboard } from '@app/utils/mappers/map-current-challenge-leaderboard';
import { ChallengesData, UserData } from '@app/types/firebase';
import PageLoadingIndicator, {
  LOADING_MESSAGES,
} from '@app/components/page-loading-indicator';
import { getChallenges } from '@app/services/firebase/api/get-challenges';
import { getUsers } from '@app/services/firebase/api/get-users';
import { checkUsersToCreateOrUpdate } from '@app/services/helpers/check-users';
import { checkChallengesToCreateOrUpdate } from '@app/services/helpers/check-challenges';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
  background: black;
  top: 0;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`;

export default function Home({
  currentChallengeLeaderboard,
  previousChallenge,
  currentChallenge,
  nextChallenge,
  isLoading,
}: HomepageProps) {
  const REFRESH_TIME_IN_MS = 900000;
  // Force a router replace in order to serve the new data
  useEffect(() => {
    if (isLoading) {
      setTimeout(
        () => {
          router.replace(router.asPath);
          //
        },
        // Wait with the refresh until the PageLoadingIndicator has finished all the animations.
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
    <PageContainer>
      <PageHeader
        currentChallenge={currentChallenge}
        nextChallenge={nextChallenge}
      />
      <List
        items={
          currentChallengeLeaderboard.length
            ? currentChallengeLeaderboard
            : DEFAULT_LEADERBOARD
        }
        isPlaceholder={!currentChallengeLeaderboard.length}
      />
      <BottomSection previousChallenge={previousChallenge} />
    </PageContainer>
  );
}

export const getServerSideProps = async () => {
  const challenges: ChallengesData = await getChallenges();
  const users: UserData[] = await getUsers();

  const currentYear = new Date().getUTCFullYear();
  const challengesOfThisYear = challenges?.[currentYear];

  await checkUsersToCreateOrUpdate(users);
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
