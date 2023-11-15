import Head from 'next/head';
import COLOR from '@app/theme/basic/color';
import PageHeader from '@app/components/page-header';
import content, { REGISTERED_USERS } from '@app/content';
import QRCode from '@app/components/qr-code';
import List from '@app/components/list';
import PreviousWinner from '@app/components/previous-winner';
import TimeRemaining from '@app/components/time-remaining';
import {
  useFireBaseChallenge,
  useFirebaseData,
} from '@app/services/firebase/hooks';
import { useEffect, useState } from 'react';
import { HomepageProps } from '@app/types/homepage';
import router from 'next/router';

export default function Home({
  users,
  challenges,
  previousWinner,
  currentChallenge,
  nextChallenge,
}: HomepageProps) {
  const REFRESH_TIME_IN_MS = 1000000;
  // useEffect(() => {
  // if (needsUpdating) {
  // fetch(`/api/firebase/check-users`);
  // fetch(`/api/monkey-type/get-data`)
  // .then((response) => response.json())
  // .then((data) => {
  // console.log('data fetched:', data);
  // });
  // fetch(`/api/firebase/check-challenges`);
  // setNeedsUpdating(false);
  // }

  // fetch(`/api/firebase/get-challenge`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setChallenges(data);
  //   });
  //   fetch(`/api/firebase/get-data`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, [needsUpdating]);


  // Force a replace in order to serve the new static page
  useEffect(() => {
    const id = setInterval(
      () => router.replace(router.asPath),
      REFRESH_TIME_IN_MS
    );
    return () => clearInterval(id);
  }, []);

  const showImage = REGISTERED_USERS.find(
    (user) => user.username === previousWinner.name
  )?.showDiscordImage;

  return (
    <>
      <Head>
        <title>MonkeyType Touchtribe</title>
        <meta
          name="description"
          content="A MonkeyType leaderboard for Touchtribe "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ background: COLOR.black, flex: 1 }}>
        {challenges && (
          <PageHeader
            currentChallenge={challenges.currentChallenge}
            nextChallenge={challenges.nextChallenge}
          />
        )}
        {users && <List {...content.monkeyTypeDate} items={users} />}
        <PreviousWinner
          showImage={showImage || false}
          name={previousWinner.name}
          displayName={previousWinner.displayName}
          title={previousWinner.title}
          description={previousWinner.description}
          image={previousWinner.image}
          wpm={previousWinner.wpm}
          accuracy={previousWinner.accuracy}
        />
        <TimeRemaining title="Time remaining" />
        <QRCode {...content.QRCode} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const getMonkeyTypeProfile = await fetch(
    `${process.env.BASE_URL}/api/monkey-type/get-profile`
  );

  const getUsers = await fetch(
    `${process.env.BASE_URL}/api/firebase/get-users`
  );

  const getChallenges = await fetch(
    `${process.env.BASE_URL}/api/firebase/get-challenge`
  );

  // TODO: Move this logic to CRON job vercel
  // await fetch(`${process.env.BASE_URL}/api/firebase/check-users`);
  // await fetch(`${process.env.BASE_URL}/api/firebase/check-challenges`);

  // Fetch the users and challenges data from firebase once here, and then put it all through a big mapper which makes sense of it all
  // This is so we can reduce calls to firebase
  const challenges = await getChallenges.json();
  const users = await getUsers.json();
  // const monkeyTypeProfile = await getMonkeyTypeProfile.json();

  // Make mappers here which return logical information ()
  // const currentChallengeLeaderboard = mapCurrentChallengeLeaderboard(users, challenges)
  const { previousChallenge, currentChallenge, nextChallenge } = mapChallenges(challenges)

  // Do checkCreateUsers here (check users object vs REGISTERED)
  // Do checkUsers fetch here to check if updates need to be done (but only check firebase if REGISTERED_USERS !== users, since users gets fetched every hour anyway)
  // Do checkChallenges fetch here to check if updates need to be done (but only check firebase if there either no challenges for this year yet, or if there is no winner of previousMonth yet, so this firebase connection should only happens maximum of 13 times per year)

  const previousWinner = {
    title: challenges?.previousChallenge?.title,
    description: challenges?.previousChallenge?.description,
    ...(challenges?.previousChallenge?.winner && {
      name: challenges?.previousChallenge?.winner?.name,
      displayName:
        challenges?.previousChallenge?.winner?.nickname ||
        challenges?.previousChallenge?.winner?.name,
      image: challenges?.previousChallenge?.winner?.image,
      wpm: challenges?.previousChallenge?.winner?.wordsPerMinute,
      accuracy: challenges?.previousChallenge?.winner?.accuracy,
    }),
  };

  const currentChallenge = {
    title: challenges?.currentChallenge?.title,
    description: challenges?.currentChallenge?.description,
  };

  const nextChallenge = {
    title: challenges?.nextChallenge?.title,
    description: challenges?.nextChallenge?.description,
  };

  return {
    props: {
      previousWinner,
      currentChallenge,
      nextChallenge,
      users,
      challenges,
    },
  };
};
