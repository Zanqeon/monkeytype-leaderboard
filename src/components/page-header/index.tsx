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
  StyledImage,
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
        <StyledImage src="/logo.svg" alt="Logo" />
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
