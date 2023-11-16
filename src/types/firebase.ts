import { Timestamp } from 'firebase/firestore';

export type ChallengeType = 'time' | 'words';

export interface UserData {
  uid: string;
  username: string;
  displayName: string;
  lastUpdated: number;
  image?: string;
  showDiscordImage: boolean;
  discordId?: number;
  discordAvatar?: number;
  createdAt: Timestamp;
  records: {
    [year: string]: {
      [month: string]: {
        [key in ChallengeType]: {
          [length: number]: {
            accuracy: number;
            wpm: number;
            timestamp: number;
          };
        };
      };
    };
  };
}

export interface Winner {
  username: string;
  displayName: string;
  image?: string;
  showDiscordImage: boolean;
  record: {
    timestamp: number;
    wpm: number;
    accuracy: number;
  };
}

export interface Challenge {
  type: ChallengeType;
  length: number;
  winner?: Winner;
}

export interface ChallengesData {
  [year: string]: {
    [month: string]: Challenge;
  };
}
