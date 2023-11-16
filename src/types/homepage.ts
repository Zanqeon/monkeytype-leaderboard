import { ChallengeType } from '@app/types/firebase';

export interface HomepageProps {
  previousChallenge: {
    type: ChallengeType;
    length: number;
    title: string;
    description: string;
    winner: {
      displayName: string;
      id: string;
      image?: string;
      wordsPerMinute: number;
      accuracy: number;
      date: string;
      showDiscordImage: boolean;
    };
  };
  nextChallenge: {
    type: ChallengeType;
    length: number;
    title: string;
    description: string;
  };
  currentChallenge: {
    type: ChallengeType;
    length: number;
    title: string;
    description: string;
  };
  currentChallengeLeaderboard: {
    username: string;
    displayName: string;
    wordsPerMinute: number;
    accuracy: number;
    timestamp: number;
  }[];
  isLoading: boolean;
}
