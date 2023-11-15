import QRCodeImage from 'public/qr-monkeytype.svg';
// import QRCodeImageAccount from 'public/qr-monkeytype-account.svg';

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

export const REGISTERED_USERS = [
  {
    username: 'Zanqeon',
    nickname: 'Tim',
    showDiscordImage: false,
    apiKey: process.env.API_KEY_1,
  },
  {
    username: '0000001',
    nickname: 'Person 2',
    apiKey: process.env.API_KEY_2,
  },
  {
    username: '0000002',
    nickname: 'Person 3',
    apiKey: process.env.API_KEY_3,
  },

  {
    username: '0000003',
    nickname: 'Person 4',
    showDiscordImage: true,
    apiKey: process.env.API_KEY_4,
  },
  {
    username: '0000004',
    nickname: 'Person 5',
    apiKey: process.env.API_KEY_5,
  },
  {
    username: '0000005',
    nickname: 'Person 6',
    apiKey: process.env.API_KEY_6,
  },
  {
    username: '0000007',
    id: '0000007',
    apiKey: process.env.API_KEY_7,
  },
  {
    username: '0000008',
    nickname: 'Person 8',
    apiKey: process.env.API_KEY_8,
  },
];
