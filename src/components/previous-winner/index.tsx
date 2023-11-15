import Image from 'next/image';
import { Container } from '@totemblock/layout';
import Avatar from 'boring-avatars';
import { useTheme } from 'styled-components';
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
import { getColorArray } from '@app/utils/get-color-array';

export interface IPreviousWinnerProps {
  title: string;
  description: string;
  displayName: string;
  name: string;
  image?: string;
  wpm: number;
  accuracy: string;
  showImage: boolean;
}

const PreviousWinner = ({
  title,
  description,
  displayName,
  image,
  wpm,
  accuracy,
  showImage,
}: IPreviousWinnerProps) => {
  const { COLOR } = useTheme();

  const COLOR_GRADIENT_MAP = [
    getColorArray(COLOR.primary),
    getColorArray(COLOR.secondary),
    getColorArray(COLOR.tertiary),
    getColorArray(COLOR.quaternary),
  ];

  const randomColorScheme =
    COLOR_GRADIENT_MAP[Math.floor(Math.random() * COLOR_GRADIENT_MAP.length)];

  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledWrapper>
        <StyledCard>
          <StyledHeader>
            <StyledImageContainer>
              <StyledImageWrapper>
                {image && showImage && (
                  <Image src={image} alt="avatar" height={48} width={48} />
                )}
                {!image ||
                  (!showImage && (
                    <Avatar
                      size={48}
                      name={displayName}
                      variant="pixel"
                      colors={randomColorScheme}
                    />
                  ))}
              </StyledImageWrapper>
              <StyledEmoji>👑</StyledEmoji>
            </StyledImageContainer>
          </StyledHeader>
          <StyledContentContainer>
            <StyledName>{displayName}</StyledName>
            <StyledResult>
              <StyledLabel>WPM</StyledLabel>
              <StyledWordsPerMinute>{wpm}</StyledWordsPerMinute>
              <StyledLabel>Accuracy</StyledLabel>
              <StyledAccuracy>{accuracy}</StyledAccuracy>
            </StyledResult>
          </StyledContentContainer>
        </StyledCard>
      </StyledWrapper>
    </Container>
  );
};

export default PreviousWinner;
