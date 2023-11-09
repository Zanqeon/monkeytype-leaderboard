import Image from 'next/image';
import {
  StyledContainer,
  StyledCurrentChallengeDesktop,
  StyledCurrentChallengeMobile,
  StyledCurrentChallengeDescription,
  StyledCurrentChallengeTitle,
  StyledNextChallenge,
  StyledNextChallengeTitle,
  StyledNextChallengeDescription,
  StyledImageWrapper,
} from './style';

export interface IPageHeaderProps {
  currentChallenge: {
    title: string;
    description: string;
  };
  nextChallenge: {
    title: string;
    description: string;
  };
}

const PageHeader = ({ currentChallenge, nextChallenge }: IPageHeaderProps) => (
  <>
    <StyledContainer>
      <StyledImageWrapper>
        <Image
          src="/logo.svg"
          alt="Logo"
          sizes="(min-width: 0px) 160px"
          priority
          fill
        />
      </StyledImageWrapper>
      <StyledCurrentChallengeDesktop>
        <StyledCurrentChallengeDescription>
          {currentChallenge.description}
        </StyledCurrentChallengeDescription>
        <StyledCurrentChallengeTitle>
          {currentChallenge.title}
        </StyledCurrentChallengeTitle>
      </StyledCurrentChallengeDesktop>
      <StyledNextChallenge>
        <StyledNextChallengeTitle>
          {nextChallenge.title}
        </StyledNextChallengeTitle>
        <StyledNextChallengeDescription>
          {nextChallenge.description}
        </StyledNextChallengeDescription>
      </StyledNextChallenge>
    </StyledContainer>
    <StyledCurrentChallengeMobile>
      <StyledCurrentChallengeDescription>
        {currentChallenge.description}
      </StyledCurrentChallengeDescription>
      <StyledCurrentChallengeTitle>
        {currentChallenge.title}
      </StyledCurrentChallengeTitle>
    </StyledCurrentChallengeMobile>
  </>
);

export default PageHeader;
