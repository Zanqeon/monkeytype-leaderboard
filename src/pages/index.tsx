import Head from 'next/head';
import COLOR from '@app/theme/basic/color';
import PageHeader from '@app/components/page-header';
import content from '@app/content';
import QRCode from '@app/components/qr-code';
import List from '@app/components/list';
import PreviousWinner from '@app/components/previous-winner';
import TimeRemaining from '@app/components/time-remaining';
import { GetServerSideProps } from 'next';
import {
  fetchFirebaseData,
  getPreviousWinner,
  updateUsers,
} from '@app/services/firebase/api';
import { PreviousWinnerType } from '@app/types/firebase';

export interface HomeProps {
  previousWinner: PreviousWinnerType;
}

export default function Home({ previousWinner }: HomeProps) {
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
        <PageHeader {...content.pageHeader} />
        <List {...content.monkeyTypeDate} />
        <PreviousWinner
          title="Winner October"
          description="100 words"
          name={previousWinner.nickname || previousWinner.name}
          image={previousWinner.image}
          wpm={114}
          accuracy="98%"
        />
        <TimeRemaining title="Time remaining" />
        <QRCode {...content.QRCode} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fireBaseData = await fetchFirebaseData();
  await updateUsers();

  // TODO: fetch previous winner
  const previousWinner = await getPreviousWinner();

  return {
    props: {
      users: fireBaseData,
      previousWinner: previousWinner,
    },
  };
};
