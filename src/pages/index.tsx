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
  const [needsUpdating, setNeedsUpdating] = useState(true);

  const { data: challenges } = useFireBaseChallenge();
  const { data: users } = useFirebaseData();

  useEffect(() => {
    if (needsUpdating) {
      fetch(`/api/firebase/update-data`);
      fetch(`/api/firebase/update-challenge`);
      setNeedsUpdating(false);
    }
  }, [needsUpdating]);

  useEffect(() => {
    const id = setInterval(() => setNeedsUpdating(true), 15000);
    return () => clearInterval(id);
  }, []);

  console.log(challenges?.previousChallenge?.winner);

  if (users && challenges) {
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
          <List {...content.monkeyTypeDate} items={users} />
          <PreviousWinner
            title={challenges?.previousChallenge?.title}
            description={challenges?.previousChallenge?.description}
            name={
              challenges?.previousChallenge?.winner.nickname ||
              challenges?.previousChallenge?.winner.name
            }
            image={challenges?.previousChallenge?.winner.image}
            wpm={challenges?.previousChallenge?.winner.wordsPerMinute}
            accuracy={challenges?.previousChallenge?.winner.accuracy}
          />
          <TimeRemaining title="Time remaining" />
          <QRCode {...content.QRCode} />
        </main>
      </>
    );
  } else return '';
}
