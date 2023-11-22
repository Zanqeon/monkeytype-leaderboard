// import QRCodeImage from 'public/qr-monkeytype.svg';
import { IPreviousChallengeProps } from './components/previous-challenge';
import { IListProps } from './components/list';
import QRCodeImageAccount from 'public/qr-monkeytype-account.svg';
import DefaultWinnerImage from 'public/default-winner.jpg';

export const REGISTERED_USERS = [
  {
    username: 'Zanqeon',
    displayName: 'Tim',
    showDiscordImage: false,
    apiKey: process.env.API_KEY_1,
  },
  {
    username: 'radijs',
    displayName: 'Robbert',
    apiKey: process.env.API_KEY_2,
  },
  {
    username: 'ezra-tribe',
    displayName: 'Ezra',
    apiKey: process.env.API_KEY_3,
  },
  {
    username: 'alexajeune',
    displayName: 'Alexa',
    apiKey: process.env.API_KEY_4,
  },
];

export const DEFAULT_WINNER: IPreviousChallengeProps['winner'] = {
  displayName: 'Zanqeon',
  wordsPerMinute: 110,
  accuracy: 98,
  showDiscordImage: true,
  image: DefaultWinnerImage.src,
};

export const DEFAULT_LEADERBOARD: IListProps['items'] = [
  {
    displayName: 'Tim Huijg',
    wordsPerMinute: 117,
    accuracy: 91,
    timestamp: Date.now() + 200000000,
  },
  {
    displayName: 'ユンジュ コン',
    wordsPerMinute: 117,
    accuracy: 88,
    timestamp: Date.now(),
  },
  {
    displayName: "Kiri Mana'ia",
    wordsPerMinute: 108,
    accuracy: 89,
    timestamp: Date.now() + 100000000,
  },
  {
    displayName: 'Torbjörn Holmgren',
    wordsPerMinute: 96,
    accuracy: 94,
    timestamp: Date.now() - 200000000,
  },
  {
    displayName: 'José Henríquez',
    wordsPerMinute: 93,
    accuracy: 90,
    timestamp: Date.now() + 100000000,
  },
  {
    displayName: 'Matthias Weber',
    wordsPerMinute: 87,
    accuracy: 83,
    timestamp: Date.now(),
  },
  {
    displayName: 'হুদা আমিন',
    wordsPerMinute: 83,
    accuracy: 100,
    timestamp: Date.now(),
  },
  {
    displayName: 'Þuríður Magnúsdóttir',
    wordsPerMinute: 78,
    accuracy: 96,
    timestamp: Date.now() - 100000000,
  },
  {
    displayName: '신영 전',
    wordsPerMinute: 78,
    accuracy: 90,
    timestamp: Date.now() + 100000000,
  },
  {
    displayName: 'Daniel Jackson',
    wordsPerMinute: 72,
    accuracy: 64,
    timestamp: Date.now() + 200000000,
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  QRCode: {
    linkLabel: 'monkeytype.com',
    linkHref: 'https://www.monkeytype.com',
    image: QRCodeImageAccount,
  },
};

export const mockResults = {
  message: 'Results retrieved',
  data: [
    {
      _id: '655796e4fc0647e20829baa8',
      wpm: 95.88,
      rawWpm: 98.88,
      charStats: [128, 3, 0, 1],
      acc: 96.24,
      mode: 'words',
      mode2: '25',
      timestamp: 1700239076000,
      consistency: 65.15,
      keyConsistency: 28.1,
      chartData: {
        wpm: [
          36, 78, 92, 99, 84, 82, 79, 78, 81, 82, 85, 87, 89, 93, 94, 94, 96,
        ],
        raw: [
          96, 120, 120, 120, 60, 48, 60, 72, 108, 84, 120, 108, 108, 144, 120,
          96, 12,
        ],
        err: [4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      testDuration: 16.02,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 121.36, sd: 88.94 },
      keyDurationStats: { average: 91.06, sd: 33.07 },
      name: 'Zanqeon',
      isPb: true,
    },
    {
      _id: '655796cffc0647e20829b961',
      wpm: 103.91,
      rawWpm: 103.91,
      charStats: [53, 0, 0, 0],
      acc: 100,
      mode: 'words',
      mode2: '10',
      timestamp: 1700239055000,
      restartCount: 1,
      incompleteTestSeconds: 1.73,
      consistency: 67.76,
      keyConsistency: 61.51,
      chartData: {
        wpm: [107, 96, 100, 99, 98, 100, 104],
        raw: [120, 84, 108, 96, 96, 108, 24],
        err: [0, 0, 0, 0, 0, 0, 0],
      },
      testDuration: 6.12,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 117.71, sd: 46.91 },
      keyDurationStats: { average: 86.32, sd: 25.5 },
      name: 'Zanqeon',
    },
    {
      _id: '655796c4fc0647e20829b8bd',
      wpm: 61.05,
      rawWpm: 69.37,
      charStats: [44, 1, 0, 0],
      acc: 82.76,
      mode: 'words',
      mode2: '10',
      timestamp: 1700239044000,
      restartCount: 2,
      incompleteTestSeconds: 2.57,
      consistency: 49.8,
      keyConsistency: 0.01,
      chartData: {
        wpm: [95, 102, 68, 51, 53, 64, 58, 57, 61],
        raw: [108, 144, 48, 0, 60, 120, 96, 72, 74],
        err: [0, 3, 4, 0, 0, 0, 2, 1, 0],
      },
      testDuration: 8.65,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 151.74, sd: 238.01 },
      keyDurationStats: { average: 100.89, sd: 37.69 },
      name: 'Zanqeon',
    },
    {
      _id: '655796b3fc0647e20829b7ad',
      wpm: 85.1,
      rawWpm: 85.1,
      charStats: [54, 0, 0, 0],
      acc: 96.49,
      mode: 'words',
      mode2: '10',
      timestamp: 1700239027000,
      restartCount: 6,
      incompleteTestSeconds: 13.02,
      consistency: 64.35,
      keyConsistency: 14.43,
      chartData: {
        wpm: [108, 96, 104, 102, 89, 86, 79, 85],
        raw: [120, 84, 120, 96, 96, 48, 36, 135],
        err: [0, 0, 0, 0, 2, 0, 0, 0],
      },
      testDuration: 7.62,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 135.98, sd: 123.29 },
      keyDurationStats: { average: 95.44, sd: 32.81 },
      name: 'Zanqeon',
    },
    {
      _id: '65579693fc0647e20829b5b4',
      wpm: 99.86,
      rawWpm: 99.86,
      charStats: [54, 0, 0, 0],
      acc: 98.21,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238995000,
      restartCount: 7,
      incompleteTestSeconds: 34.32,
      consistency: 74.12,
      keyConsistency: 20.55,
      chartData: {
        wpm: [132, 114, 108, 105, 106, 94, 100],
        raw: [144, 96, 96, 96, 108, 60, 72],
        err: [0, 0, 0, 0, 0, 1, 0],
      },
      testDuration: 6.49,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 117.98, sd: 97.42 },
      keyDurationStats: { average: 89.23, sd: 28.89 },
      name: 'Zanqeon',
    },
    {
      _id: '6557965dfc0647e20829b27e',
      wpm: 71.84,
      rawWpm: 71.84,
      charStats: [49, 0, 0, 0],
      acc: 92.45,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238941000,
      restartCount: 2,
      incompleteTestSeconds: 5.12,
      consistency: 62.09,
      keyConsistency: 3.09,
      chartData: {
        wpm: [83, 78, 68, 75, 72, 60, 63, 68, 72],
        raw: [96, 72, 48, 96, 96, 24, 72, 96, 36],
        err: [0, 0, 0, 0, 2, 2, 0, 0, 0],
      },
      testDuration: 8.18,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 157.4, sd: 181.43 },
      keyDurationStats: { average: 94.22, sd: 33.46 },
      name: 'Zanqeon',
    },
    {
      _id: '6557964dfc0647e20829b184',
      wpm: 85.31,
      rawWpm: 94.38,
      charStats: [47, 2, 0, 0],
      acc: 90.74,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238925000,
      consistency: 71.99,
      keyConsistency: 18.31,
      chartData: {
        wpm: [132, 101, 88, 87, 77, 78, 85],
        raw: [144, 96, 60, 84, 84, 96, 138],
        err: [0, 2, 0, 0, 2, 1, 0],
      },
      testDuration: 6.61,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 124.75, sd: 105.62 },
      keyDurationStats: { average: 86.8, sd: 28.2 },
      name: 'Zanqeon',
    },
    {
      _id: '65579644fc0647e20829b0f8',
      wpm: 100.73,
      rawWpm: 100.73,
      charStats: [52, 0, 0, 0],
      acc: 100,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238916000,
      restartCount: 1,
      incompleteTestSeconds: 5.87,
      consistency: 60.05,
      keyConsistency: 37.73,
      chartData: {
        wpm: [131, 108, 92, 102, 101, 96, 101],
        raw: [144, 84, 60, 132, 96, 72, 36],
        err: [0, 0, 0, 0, 0, 0, 0],
      },
      testDuration: 6.19,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 121.47, sd: 75.8 },
      keyDurationStats: { average: 95.62, sd: 36.75 },
      name: 'Zanqeon',
    },
    {
      _id: '65579630fc0647e20829afc2',
      wpm: 73.45,
      rawWpm: 83.73,
      charStats: [50, 1, 0, 0],
      acc: 91.67,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238896000,
      restartCount: 1,
      incompleteTestSeconds: 3.71,
      consistency: 46.32,
      keyConsistency: 3.41,
      chartData: {
        wpm: [107, 54, 64, 66, 77, 74, 79, 69, 73],
        raw: [120, 48, 96, 108, 120, 60, 132, 0, 36],
        err: [0, 1, 1, 1, 0, 0, 2, 0, 0],
      },
      testDuration: 8.17,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 138.46, sd: 158.83 },
      keyDurationStats: { average: 91.08, sd: 31.86 },
      name: 'Zanqeon',
    },
    {
      _id: '65579621fc0647e20829aec4',
      wpm: 86.64,
      rawWpm: 86.64,
      charStats: [47, 0, 0, 0],
      acc: 96,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238881000,
      consistency: 64.5,
      keyConsistency: 3.47,
      chartData: {
        wpm: [60, 84, 76, 75, 91, 82, 87],
        raw: [72, 108, 84, 72, 156, 48, 118],
        err: [0, 0, 1, 0, 0, 1, 0],
      },
      testDuration: 6.51,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 132.86, sd: 151.56 },
      keyDurationStats: { average: 82.99, sd: 30.3 },
      name: 'Zanqeon',
    },
    {
      _id: '65579618fc0647e20829ae4b',
      wpm: 94.69,
      rawWpm: 106.24,
      charStats: [41, 2, 0, 0],
      acc: 93.48,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238872000,
      restartCount: 4,
      incompleteTestSeconds: 2.95,
      consistency: 57.66,
      keyConsistency: 35.72,
      chartData: {
        wpm: [144, 102, 76, 81, 89, 95],
        raw: [156, 60, 84, 96, 120, 36],
        err: [0, 0, 3, 0, 0, 0],
      },
      testDuration: 5.2,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 115.47, sd: 75.61 },
      keyDurationStats: { average: 88.98, sd: 35.22 },
      name: 'Zanqeon',
    },
    {
      _id: '65579609fc0647e20829ad58',
      wpm: 93.56,
      rawWpm: 93.56,
      charStats: [55, 0, 0, 0],
      acc: 94.83,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238857000,
      consistency: 59.96,
      keyConsistency: 17.28,
      chartData: {
        wpm: [108, 72, 84, 90, 96, 90, 91, 94],
        raw: [120, 60, 108, 108, 120, 72, 96, 12],
        err: [0, 2, 0, 0, 0, 1, 0, 0],
      },
      testDuration: 7.05,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 123.75, sd: 107.68 },
      keyDurationStats: { average: 90.08, sd: 32.32 },
      name: 'Zanqeon',
    },
    {
      _id: '65579601fc0647e20829acd4',
      wpm: 98.19,
      rawWpm: 98.19,
      charStats: [52, 0, 0, 0],
      acc: 98.11,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238849000,
      consistency: 59.56,
      keyConsistency: 31.67,
      chartData: {
        wpm: [96, 108, 116, 111, 91, 94, 98],
        raw: [108, 120, 132, 96, 24, 108, 48],
        err: [0, 0, 0, 0, 1, 0, 0],
      },
      testDuration: 6.36,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 122.21, sd: 85.35 },
      keyDurationStats: { average: 83.12, sd: 24.72 },
      name: 'Zanqeon',
    },
    {
      _id: '655795f9fc0647e20829ac64',
      wpm: 91.54,
      rawWpm: 91.54,
      charStats: [52, 0, 0, 0],
      acc: 94.55,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238841000,
      consistency: 73.64,
      keyConsistency: 25.56,
      chartData: {
        wpm: [96, 108, 104, 87, 79, 86, 92],
        raw: [108, 120, 96, 48, 72, 120, 117],
        err: [0, 0, 0, 1, 2, 0, 0],
      },
      testDuration: 6.82,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 126.24, sd: 94.92 },
      keyDurationStats: { average: 92.21, sd: 27.2 },
      name: 'Zanqeon',
    },
    {
      _id: '655795f0fc0647e20829abde',
      wpm: 91.57,
      rawWpm: 91.57,
      charStats: [51, 0, 0, 0],
      acc: 98.08,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238832000,
      consistency: 59.24,
      keyConsistency: 3.6,
      chartData: {
        wpm: [120, 114, 112, 114, 108, 92, 92],
        raw: [132, 108, 108, 120, 84, 60, 18],
        err: [0, 0, 0, 0, 0, 1, 0],
      },
      testDuration: 6.68,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 128.56, sd: 148.4 },
      keyDurationStats: { average: 87.91, sd: 27.83 },
      name: 'Zanqeon',
    },
    {
      _id: '655795e7fc0647e20829ab57',
      wpm: 79.26,
      rawWpm: 79.26,
      charStats: [48, 0, 0, 0],
      acc: 92.45,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238823000,
      restartCount: 4,
      incompleteTestSeconds: 14.96,
      consistency: 50.08,
      keyConsistency: 4.33,
      chartData: {
        wpm: [120, 102, 76, 72, 60, 66, 75, 79],
        raw: [132, 84, 60, 84, 12, 96, 132, 36],
        err: [0, 0, 2, 2, 0, 0, 0, 0],
      },
      testDuration: 7.27,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 139.69, sd: 154.63 },
      keyDurationStats: { average: 94.04, sd: 29.57 },
      name: 'Zanqeon',
    },
    {
      _id: '655795c8fc0647e20829a96a',
      wpm: 85.55,
      rawWpm: 95.62,
      charStats: [51, 3, 1, 0],
      acc: 85.25,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238792000,
      consistency: 60.17,
      keyConsistency: 25.79,
      chartData: {
        wpm: [48, 54, 60, 75, 82, 86, 84, 86],
        raw: [120, 48, 72, 120, 108, 108, 132, 24],
        err: [2, 2, 0, 0, 0, 0, 5, 0],
      },
      testDuration: 7.15,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 119.23, sd: 90.25 },
      keyDurationStats: { average: 91.03, sd: 30.49 },
      name: 'Zanqeon',
    },
    {
      _id: '655795bffc0647e20829a8e1',
      wpm: 81.42,
      rawWpm: 95.58,
      charStats: [46, 1, 1, 0],
      acc: 91.07,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238783000,
      consistency: 70.64,
      keyConsistency: 35.49,
      chartData: {
        wpm: [48, 66, 56, 72, 74, 76, 81],
        raw: [156, 84, 60, 120, 84, 84, 108],
        err: [3, 0, 2, 0, 0, 0, 0],
      },
      testDuration: 6.78,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 123.27, sd: 79.87 },
      keyDurationStats: { average: 93.66, sd: 31.56 },
      name: 'Zanqeon',
    },
    {
      _id: '655795b6fc0647e20829a85b',
      wpm: 61.71,
      rawWpm: 61.71,
      charStats: [52, 0, 0, 0],
      acc: 88.33,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238774000,
      consistency: 55.57,
      keyConsistency: 4.8,
      chartData: {
        wpm: [48, 72, 84, 72, 70, 58, 58, 54, 61, 59, 62],
        raw: [60, 96, 108, 36, 60, 36, 60, 60, 120, 60, 24],
        err: [0, 0, 0, 0, 0, 3, 0, 2, 0, 2, 0],
      },
      testDuration: 10.11,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 171.39, sd: 187.85 },
      keyDurationStats: { average: 89.76, sd: 36.18 },
      name: 'Zanqeon',
    },
    {
      _id: '655795a9fc0647e20829a777',
      wpm: 71.28,
      rawWpm: 71.28,
      charStats: [43, 0, 0, 0],
      acc: 100,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238761000,
      consistency: 36.23,
      keyConsistency: 0,
      chartData: {
        wpm: [36, 0, 12, 30, 46, 60, 67, 71],
        raw: [36, 0, 36, 96, 108, 132, 108, 36],
        err: [0, 0, 0, 0, 0, 0, 0, 0],
      },
      testDuration: 7.24,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 160.89, sd: 365.84 },
      keyDurationStats: { average: 95.58, sd: 38.56 },
      name: 'Zanqeon',
    },
    {
      _id: '655795a0fc0647e20829a6ec',
      wpm: 95.47,
      rawWpm: 95.47,
      charStats: [58, 0, 0, 0],
      acc: 98.31,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238752000,
      consistency: 55.11,
      keyConsistency: 17.05,
      chartData: {
        wpm: [132, 120, 80, 87, 96, 86, 91, 95],
        raw: [144, 108, 48, 72, 132, 36, 120, 48],
        err: [0, 0, 1, 0, 0, 0, 0, 0],
      },
      testDuration: 7.29,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 125.69, sd: 109.5 },
      keyDurationStats: { average: 91.16, sd: 29.69 },
      name: 'Zanqeon',
    },
    {
      _id: '65579597fc0647e20829a667',
      wpm: 80.32,
      rawWpm: 80.32,
      charStats: [60, 0, 0, 0],
      acc: 88.24,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238743000,
      restartCount: 3,
      incompleteTestSeconds: 5.67,
      consistency: 65.83,
      keyConsistency: 11.35,
      chartData: {
        wpm: [108, 108, 112, 87, 96, 94, 81, 76, 80],
        raw: [120, 108, 120, 48, 108, 120, 48, 48, 100],
        err: [0, 0, 0, 1, 0, 2, 4, 1, 0],
      },
      testDuration: 8.96,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 133.8, sd: 128.43 },
      keyDurationStats: { average: 92.41, sd: 34.67 },
      name: 'Zanqeon',
    },
    {
      _id: '6557957bfc0647e20829a4ce',
      wpm: 84.77,
      rawWpm: 89.97,
      charStats: [212, 4, 0, 0],
      acc: 96.05,
      mode: 'time',
      mode2: '30',
      timestamp: 1700238715000,
      consistency: 72.7,
      keyConsistency: 27.73,
      chartData: {
        wpm: [
          96, 114, 111, 111, 113, 106, 101, 99, 95, 96, 86, 89, 86, 87, 87, 85,
          83, 76, 75, 75, 76, 77, 78, 81, 82, 83, 82, 83, 84, 84,
        ],
        raw: [
          108, 132, 108, 108, 120, 72, 72, 84, 60, 108, 84, 48, 48, 108, 84, 48,
          48, 108, 84, 72, 96, 96, 96, 144, 120, 96, 72, 108, 96, 108,
        ],
        err: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0,
        ],
      },
      testDuration: 30.01,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 131.62, sd: 96.63 },
      keyDurationStats: { average: 96.69, sd: 32.38 },
      name: 'Zanqeon',
    },
    {
      _id: '65579559fc0647e20829a298',
      wpm: 65.98,
      rawWpm: 73.58,
      charStats: [165, 7, 0, 1],
      acc: 88.72,
      mode: 'time',
      mode2: '30',
      timestamp: 1700238681000,
      consistency: 68.04,
      keyConsistency: 11.67,
      chartData: {
        wpm: [
          72, 78, 52, 36, 43, 40, 36, 44, 40, 44, 49, 54, 54, 55, 56, 59, 59,
          57, 59, 59, 61, 62, 62, 64, 65, 64, 65, 65, 66, 66,
        ],
        raw: [
          132, 96, 96, 48, 84, 36, 48, 96, 48, 84, 96, 108, 72, 72, 72, 96, 72,
          24, 84, 60, 96, 84, 60, 120, 96, 48, 84, 108, 60, 60,
        ],
        err: [
          5, 0, 4, 2, 0, 1, 3, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 1, 0, 1, 0, 0,
        ],
      },
      testDuration: 30.01,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 154.37, sd: 147.16 },
      keyDurationStats: { average: 96.23, sd: 37.18 },
      name: 'Zanqeon',
    },
    {
      _id: '6557952ffc0647e20825caf1',
      wpm: 94.39,
      rawWpm: 94.39,
      charStats: [118, 0, 0, 0],
      acc: 96.72,
      mode: 'time',
      mode2: '15',
      timestamp: 1700238639000,
      consistency: 69.27,
      keyConsistency: 19.44,
      chartData: {
        wpm: [108, 96, 80, 96, 103, 104, 101, 97, 97, 98, 98, 96, 90, 90, 94],
        raw: [120, 84, 48, 144, 132, 108, 84, 72, 96, 108, 96, 96, 36, 96, 144],
        err: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0],
      },
      testDuration: 15,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 123.77, sd: 103.3 },
      keyDurationStats: { average: 93.74, sd: 33.38 },
      name: 'Zanqeon',
      isPb: true,
    },
    {
      _id: '6557951efc0647e20825c9c5',
      wpm: 83.19,
      rawWpm: 92.78,
      charStats: [104, 7, 0, 5],
      acc: 89.92,
      mode: 'time',
      mode2: '15',
      timestamp: 1700238622000,
      consistency: 63.63,
      keyConsistency: 29.09,
      chartData: {
        wpm: [
          120, 126, 124, 120, 115, 116, 110, 106, 95, 90, 87, 88, 87, 88, 82,
        ],
        raw: [
          132, 132, 120, 108, 96, 120, 72, 132, 48, 72, 60, 96, 72, 144, 24,
        ],
        err: [0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 0, 0, 2, 1],
      },
      testDuration: 15,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 126.78, sd: 107.93 },
      keyDurationStats: { average: 90.08, sd: 31.82 },
      name: 'Zanqeon',
    },
    {
      _id: '65579508fc0647e20821f106',
      wpm: 87.97,
      rawWpm: 95.96,
      charStats: [110, 3, 1, 1],
      acc: 94.31,
      mode: 'time',
      mode2: '15',
      timestamp: 1700238600000,
      consistency: 71.42,
      keyConsistency: 15.34,
      chartData: {
        wpm: [
          108, 108, 96, 102, 103, 108, 110, 100, 96, 86, 85, 83, 84, 86, 87,
        ],
        raw: [
          120, 108, 72, 120, 108, 132, 120, 96, 96, 12, 108, 72, 96, 108, 108,
        ],
        err: [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 1, 0, 0, 0],
      },
      testDuration: 15.01,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 122.56, sd: 109.14 },
      keyDurationStats: { average: 93.55, sd: 32.65 },
      name: 'Zanqeon',
      isPb: true,
    },
    {
      _id: '655794f6fc0647e20821effd',
      wpm: 70.38,
      rawWpm: 94.37,
      charStats: [88, 10, 0, 2],
      acc: 86.55,
      mode: 'time',
      mode2: '15',
      timestamp: 1700238582000,
      consistency: 74.6,
      keyConsistency: 26.67,
      chartData: {
        wpm: [72, 90, 80, 81, 89, 74, 81, 82, 84, 78, 79, 76, 71, 69, 70],
        raw: [120, 120, 108, 96, 120, 72, 132, 96, 96, 96, 108, 48, 84, 48, 84],
        err: [3, 0, 5, 0, 0, 1, 1, 0, 0, 1, 1, 0, 4, 0, 0],
      },
      testDuration: 15,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 126.11, sd: 93.99 },
      keyDurationStats: { average: 99.91, sd: 34.29 },
      name: 'Zanqeon',
    },
    {
      _id: '655794d2fc0647e20821eda9',
      wpm: 122.01,
      rawWpm: 122.01,
      charStats: [48, 0, 0, 0],
      acc: 100,
      mode: 'words',
      mode2: '10',
      timestamp: 1700238546000,
      incompleteTestSeconds: 15,
      consistency: 87.12,
      keyConsistency: 61.13,
      chartData: {
        wpm: [120, 120, 116, 114, 122],
        raw: [132, 120, 108, 108, 150],
        err: [0, 0, 0, 0, 0],
      },
      testDuration: 4.72,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 100.44, sd: 41.03 },
      keyDurationStats: { average: 95.36, sd: 33.89 },
      name: 'Zanqeon',
    },
    {
      _id: '654a26c3c46e6fc4877856b1',
      wpm: 74.39,
      rawWpm: 76.79,
      charStats: [186, 4, 1, 0],
      acc: 90.78,
      mode: 'time',
      mode2: '30',
      timestamp: 1699358403000,
      consistency: 57.21,
      keyConsistency: 6.66,
      chartData: {
        wpm: [
          60, 42, 60, 72, 74, 84, 86, 88, 89, 88, 87, 85, 80, 80, 78, 78, 75,
          73, 75, 74, 74, 71, 69, 68, 71, 72, 74, 74, 73, 74,
        ],
        raw: [
          120, 12, 96, 108, 84, 132, 96, 108, 96, 132, 96, 96, 24, 84, 60, 72,
          24, 60, 96, 72, 120, 12, 24, 48, 132, 120, 108, 84, 84, 72,
        ],
        err: [
          3, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 4, 1, 0,
          0, 0, 0, 0, 0, 1, 0,
        ],
      },
      testDuration: 30,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 144.99, sd: 151.31 },
      keyDurationStats: { average: 96.45, sd: 31.78 },
      name: 'Zanqeon',
    },
    {
      _id: '654a25e1c46e6fc487784d7c',
      wpm: 75.59,
      rawWpm: 78.39,
      charStats: [189, 4, 1, 0],
      acc: 91.43,
      mode: 'time',
      mode2: '30',
      timestamp: 1699358177000,
      consistency: 58.62,
      keyConsistency: 6.46,
      chartData: {
        wpm: [
          132, 132, 124, 126, 122, 122, 118, 114, 113, 113, 110, 104, 102, 98,
          94, 92, 90, 86, 85, 80, 73, 75, 75, 75, 73, 72, 72, 73, 74, 75,
        ],
        raw: [
          144, 132, 108, 132, 108, 120, 96, 84, 108, 108, 84, 60, 84, 108, 48,
          72, 60, 108, 0, 12, 36, 48, 84, 72, 84, 24, 96, 96, 96, 108,
        ],
        err: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 6, 0, 0, 0, 3, 0, 1, 2, 1, 0,
          0, 3, 0, 0, 0, 0, 0,
        ],
      },
      testDuration: 30,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 143.32, sd: 150.49 },
      keyDurationStats: { average: 100.85, sd: 32.23 },
      name: 'Zanqeon',
    },
    {
      _id: '654a198fc46e6fc487612962',
      wpm: 56.78,
      rawWpm: 67.58,
      charStats: [142, 8, 1, 0],
      acc: 90.12,
      mode: 'time',
      mode2: '30',
      timestamp: 1699355023000,
      consistency: 55.93,
      keyConsistency: 5.97,
      chartData: {
        wpm: [
          60, 84, 88, 90, 86, 76, 65, 52, 48, 43, 39, 42, 39, 36, 38, 38, 42,
          45, 47, 49, 50, 51, 52, 52, 54, 55, 54, 54, 55, 56,
        ],
        raw: [
          120, 120, 96, 96, 84, 48, 12, 36, 36, 0, 24, 72, 48, 12, 60, 60, 96,
          96, 84, 84, 72, 72, 84, 60, 84, 96, 72, 60, 96, 84,
        ],
        err: [
          3, 0, 0, 0, 1, 1, 1, 1, 2, 0, 2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 2, 1, 0, 0,
        ],
      },
      testDuration: 30.01,
      afkDuration: 1,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 174.29, sd: 185.89 },
      keyDurationStats: { average: 89.38, sd: 27.31 },
      name: 'Zanqeon',
    },
    {
      _id: '654a1915c46e6fc487612562',
      wpm: 61.98,
      rawWpm: 70.78,
      charStats: [155, 4, 1, 0],
      acc: 94.92,
      mode: 'time',
      mode2: '30',
      timestamp: 1699354901000,
      consistency: 63.05,
      keyConsistency: 2.99,
      chartData: {
        wpm: [
          96, 96, 92, 90, 91, 84, 84, 81, 79, 74, 75, 72, 67, 67, 66, 67, 66,
          65, 64, 61, 58, 56, 55, 55, 57, 59, 60, 60, 61, 62,
        ],
        raw: [
          108, 96, 84, 84, 96, 48, 84, 108, 60, 48, 84, 48, 60, 72, 60, 72, 48,
          60, 96, 72, 0, 0, 48, 72, 96, 96, 96, 72, 72, 84,
        ],
        err: [
          0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0,
        ],
      },
      testDuration: 30.01,
      afkDuration: 2,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 169.53, sd: 196.5 },
      keyDurationStats: { average: 98.67, sd: 25.31 },
      name: 'Zanqeon',
    },
    {
      _id: '654a18a7c46e6fc487598f50',
      wpm: 37.2,
      rawWpm: 37.2,
      charStats: [93, 0, 0, 0],
      acc: 84.96,
      mode: 'time',
      mode2: '30',
      timestamp: 1699354791000,
      consistency: 33.38,
      keyConsistency: 0.08,
      chartData: {
        wpm: [
          60, 30, 20, 15, 17, 18, 24, 19, 20, 23, 22, 20, 21, 20, 18, 21, 24,
          27, 30, 34, 36, 34, 35, 34, 36, 36, 38, 36, 36, 37,
        ],
        raw: [
          72, 36, 36, 0, 24, 24, 60, 60, 12, 48, 36, 0, 36, 0, 0, 60, 72, 84,
          72, 108, 84, 60, 48, 0, 84, 48, 84, 24, 12, 72,
        ],
        err: [
          0, 2, 1, 0, 0, 0, 0, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0,
          0, 0, 1, 0, 2, 0, 0,
        ],
      },
      testDuration: 30,
      afkDuration: 3,
      uid: 'ovZsDEHKiKY34YqOXJfuLgEgduE2',
      keySpacingStats: { average: 264.41, sd: 389.93 },
      keyDurationStats: { average: 123.4, sd: 44.7 },
      name: 'Zanqeon',
    },
  ],
};
