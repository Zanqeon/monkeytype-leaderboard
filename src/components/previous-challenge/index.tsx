import Image from 'next/image';
import { Container } from '@totemblock/layout';
import Avatar from 'boring-avatars';
import { useTheme } from 'styled-components';
import { getColorArray } from '@app/utils/get-color-array';
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
  const { COLOR } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const COLOR_GRADIENT_MAP = [
    getColorArray(COLOR.primary),
    getColorArray(COLOR.secondary),
    getColorArray(COLOR.tertiary),
    getColorArray(COLOR.quaternary),
  ];

  function generateRandom(username: string) {
    let sum = 0;
    for (let i = 0; i < username.length; i++) {
      sum += username.charCodeAt(i);
    }
    let result = sum % COLOR_GRADIENT_MAP.length;

    console.log('result', result)
    return result;
  }

  // Generates a random colorscheme, based on the name of the user, will always return the same color scheme for the same name
  const randomColorScheme =
    COLOR_GRADIENT_MAP[generateRandom(winner.displayName)];

    console.log('randomColorScheme', randomColorScheme)

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
                <StyledAccuracy>{winner.accuracy}</StyledAccuracy>
              </StyledResult>
            </StyledContentContainer>
          </StyledCard>
        </StyledWrapper>
      </Container>
    );
  }
};

export default PreviousChallenge;
