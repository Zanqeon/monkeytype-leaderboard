import Head from 'next/head';
import COLOR from '@app/theme/basic/color';
import PageHeader from '@app/components/page-header';
import content from '@app/content';
import QRCode from '@app/components/qr-code';
import List from '@app/components/list';
import { Container } from '@totemblock/layout';

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
        <Container>
          <List {...content.monkeyTypeDate}
          />
        </Container>
        <QRCode {...content.QRCode} />
      </main>
    </>
  );
}
