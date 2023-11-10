export type types = 'time' | 'words';

export interface UserData {
  id: string;
  name: string;
  nickname?: string;
  lastUpdated: number;
  image?: string;
  discordId: number;
  discordAvatar: number;
  records: {
    [year: number]: {
      [month: number]: {
        [type in types]: {
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
