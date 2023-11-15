import { Timestamp } from "firebase/firestore";

type challengeType = 'time' | 'words';
type monthsType = string
type yearType = string

export interface UserData {
  id: string;
  name: string;
  nickname?: string;
  lastUpdated: number;
  image?: string;
  discordId?: number;
  discordAvatar?: number;
  createdAt: Timestamp;
  uid: string;
  records: {
    [key in yearType]: {
      [key in monthsType]: {
        [key in challengeType]: {
          [length: number]: {
            accuracy: number;
            wpm: number;
            timestamp: number;
          }[];
        }[];
      }[];
    }[];
  };
}

export interface PreviousWinnerType {
  name: string;
  wpm: number;
  accuracy: number;
  image?: string;
  nickname?: string;
}

export interface ChallengeData {
  id: string;
  [year: number]: {
    [month: string]: {
      type: number;
      length: number;
      winner?: {
        name: string;
        wpm: number;
        accuracy: number;
        image?: string;
        timestamp: number;
      };
    }[];
  }[];
}

export interface Challenge {
  type: number;
  length: number;
  winner?: {
    name: string;
    wpm: number;
    accuracy: number;
    image?: string;
    timestamp: number;
  };
}
