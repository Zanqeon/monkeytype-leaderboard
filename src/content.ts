import QRCodeImage from 'public/qr-monkeytype.svg';
import { IPreviousChallengeProps } from './components/previous-challenge';
import { IListProps } from './components/list';
// import QRCodeImageAccount from 'public/qr-monkeytype-account.svg';

export const REGISTERED_USERS = [
  {
    username: 'Zanqeon',
    displayName: 'Tim',
    showDiscordImage: false,
    apiKey: process.env.API_KEY_1,
  },
  {
    username: 'goldrider10',
    displayName: 'Tim 2',
    apiKey: process.env.API_KEY_2,
  },
];

export const DEFAULT_WINNER: IPreviousChallengeProps['winner'] = {
  displayName: 'John Doe',
  wordsPerMinute: 999,
  accuracy: 100,
  showDiscordImage: false,
};

export const DEFAULT_LEADERBOARD: IListProps['items'] = [
  {
    displayName: 'John Doe',
    wordsPerMinute: 100,
    accuracy: 90,
    timestamp: Date.now(),
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  pageHeader: {
    currentChallenge: {
      title: '45 seconds',
      description: 'November challenge',
    },
    nextChallenge: {
      title: 'Coming up',
      description: '100 words',
    },
  },
  QRCode: {
    linkLabel: 'monkeytype.com',
    linkHref: 'https://www.monkeytype.com',
    image: QRCodeImage,
  },
  monkeyTypeDate: {
    items: [
      {
        name: 'Arthur Stewart',
        wordsPerMinute: 110,
        accuracy: '98%',
        date: '21/11',
      },
      {
        name: 'Gustavo Donin',
        wordsPerMinute: 103,
        accuracy: '89%',
        date: '04/11',
      },
      {
        name: 'Randy Culhane',
        wordsPerMinute: 88,
        accuracy: '100%',
        date: '13/11',
      },
      {
        name: 'Ahmad Calzoni',
        wordsPerMinute: 110,
        accuracy: '98%',
        date: '21/11',
      },
      {
        name: 'Craig Curtis',
        wordsPerMinute: 103,
        accuracy: '89%',
        date: '04/11',
      },
      {
        name: 'Jakob Vaccaro',
        wordsPerMinute: 91,
        accuracy: '100%',
        date: '13/11',
      },
      {
        name: 'Martin Gouse',
        wordsPerMinute: 84,
        accuracy: '58%',
        date: '01/11',
      },
      {
        name: 'Ashlynn Bothman',
        wordsPerMinute: 73,
        accuracy: '83%',
        date: '12/11',
      },
      {
        name: 'Kianna Dorwart',
        wordsPerMinute: 61,
        accuracy: '71%',
        date: '19/11',
      },
      {
        name: 'Lydia Botosh',
        wordsPerMinute: 50,
        accuracy: '41%',
        date: '24/11',
      },
    ],
  },
};
