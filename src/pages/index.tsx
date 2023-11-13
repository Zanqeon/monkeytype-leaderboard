import Head from 'next/head';
import COLOR from '@app/theme/basic/color';
import PageHeader from '@app/components/page-header';
import content from '@app/content';
import QRCode from '@app/components/qr-code';
import List from '@app/components/list';
import PreviousWinner from '@app/components/previous-winner';
import TimeRemaining from '@app/components/time-remaining';
import {
  useFireBaseChallenge,
  useFirebaseData,
} from '@app/services/firebase/hooks';
import { useEffect, useState } from 'react';

export default function Home() {
  const USERS_TO_SHOW = 10;
  const [needsUpdating, setNeedsUpdating] = useState(false);
  const { data: fetchedChallenges } = useFireBaseChallenge();
  const { data: fetchedUsers } = useFirebaseData();

  const [challenges, setChallenges] = useState(fetchedChallenges);
  const [users, setUsers] = useState(fetchedUsers);

  useEffect(() => {
    if (needsUpdating) {
      fetch(`/api/firebase/update-data`);
      fetch(`/api/firebase/update-challenge`);
      setNeedsUpdating(false);
    }

    fetch(`/api/firebase/get-challenge`)
      .then((response) => response.json())
      .then((data) => {
        setChallenges(data);
      });
    fetch(`/api/firebase/get-data`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [needsUpdating]);

  useEffect(() => {
    const id = setInterval(() => setNeedsUpdating(true), 15000);
    return () => clearInterval(id);
  }, []);

  const previousChallengeWinner = challenges?.previousChallenge?.winner;

  if (users) {
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
          <PageHeader
            currentChallenge={{
              title: challenges?.currentChallenge?.title,
              description: challenges?.currentChallenge?.description,
            }}
            nextChallenge={{
              title: challenges?.nextChallenge?.title,
              description: challenges?.nextChallenge?.description,
            }}
          />
          <List
            {...content.monkeyTypeDate}
            items={users.slice(0, USERS_TO_SHOW)}
          />
          <PreviousWinner
            id={previousChallengeWinner.id}
            title={challenges?.previousChallenge?.title}
            description={challenges?.previousChallenge?.description}
            name={
              previousChallengeWinner?.nickname || previousChallengeWinner?.name
            }
            image={previousChallengeWinner?.image}
            wpm={previousChallengeWinner?.wordsPerMinute}
            accuracy={previousChallengeWinner?.accuracy}
          />
          <TimeRemaining title="Time remaining" />
          <QRCode {...content.QRCode} />
        </main>
      </>
    );
  } else return '';
}
