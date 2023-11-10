import Image from 'next/image';
import { Container } from '@totemblock/layout';
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

export interface IPreviousWinnerProps {
  title: string;
  description: string;
  name: string;
  image?: string;
  wpm: number;
  accuracy: string;
}

const PreviousWinner = ({
  title,
  description,
  name,
  image,
  wpm,
  accuracy,
}: IPreviousWinnerProps) => {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledWrapper>
        <StyledCard>
          <StyledHeader>
            {image && (
              <StyledImageContainer>
                <StyledImageWrapper>
                  <Image src={image} alt="avatar" height={48} width={48} />
                </StyledImageWrapper>
                <StyledEmoji>👑</StyledEmoji>
              </StyledImageContainer>
            )}
          </StyledHeader>
          <StyledContentContainer>
            <StyledName>{name}</StyledName>
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
