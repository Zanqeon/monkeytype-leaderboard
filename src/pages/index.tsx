import Head from 'next/head';
import COLOR from '@app/theme/basic/color';
import PageHeader from '@app/components/page-header';
import content from '@app/content';
import QRCode from '@app/components/qr-code';
import List from '@app/components/list';
import PreviousWinner from '@app/components/previous-winner';
import TimeRemaining from '@app/components/time-remaining';

export default function Home() {
  return (
    <>
      <Head>
        <title>MonkeyType Touchtribe</title>
        <meta
          name="description"
          content="A MonkeyType leaderboard for the company Touchtribe "
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
          name="Arthur Stewart"
          image="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          wpm={114}
          accuracy="98%"
        />
        <TimeRemaining title="Time remaining" />
        <QRCode {...content.QRCode} />
      </main>
    </>
  );
}
