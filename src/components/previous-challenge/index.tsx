import Image from 'next/image';
import { Container } from '@totemblock/layout';
import Avatar from 'boring-avatars';
import { useGenerateColorSchemeArrayForUsername } from '@app/utils/get-color-array';
import {
  StyledWrapper,
  StyledImageContainer,
  StyledImageWrapper,
  StyledName,
  StyledHeader,
  StyledTitle,
  StyledDescription,
  StyledContentContainer,
  StyledCard,
  StyledLabel,
  StyledWordsPerMinute,
  StyledAccuracy,
  StyledResult,
  StyledEmoji,
} from './style';
import { useEffect, useState } from 'react';

export interface IPreviousChallengeProps {
  title: string;
  description: string;
  winner: {
    displayName: string;
    image?: string;
    wordsPerMinute: number;
    accuracy: number;
    showDiscordImage: boolean;
  };
}

const PreviousChallenge = ({
  title,
  description,
  winner,
}: IPreviousChallengeProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const randomColorScheme = useGenerateColorSchemeArrayForUsername(
    winner.displayName
  );

  // TODO: Check if this can be removed
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (!isLoading) {
    return (
      <Container>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledWrapper>
          <StyledCard>
            <StyledHeader>
              <StyledImageContainer>
                <StyledImageWrapper>
                  {winner.image && winner.showDiscordImage ? (
                    <Image
                      src={winner.image}
                      alt="avatar"
                      height={48}
                      width={48}
                    />
                  ) : (
                    <Avatar
                      size={48}
                      name={winner.displayName}
                      variant="pixel"
                      colors={randomColorScheme}
                    />
                  )}
                </StyledImageWrapper>
                <StyledEmoji>👑</StyledEmoji>
              </StyledImageContainer>
            </StyledHeader>
            <StyledContentContainer>
              <StyledName>{winner.displayName}</StyledName>
              <StyledResult>
                <StyledLabel>WPM</StyledLabel>
                <StyledWordsPerMinute>
                  {winner.wordsPerMinute}
                </StyledWordsPerMinute>
                <StyledLabel>Accuracy</StyledLabel>
                <StyledAccuracy>{`${winner.accuracy}%`}</StyledAccuracy>
              </StyledResult>
            </StyledContentContainer>
          </StyledCard>
        </StyledWrapper>
      </Container>
    );
  }
};

export default PreviousChallenge;
