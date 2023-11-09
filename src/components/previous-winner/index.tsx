import Image from 'next/image';
import { Container } from '@totemblock/layout';
import {
  StyledWrapper,
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
              <StyledImageWrapper>
                <Image
                  src={image}
                  alt="avatar"
                  sizes="(min-width: 0px) 80px"
                  fill
                  objectFit="cover"
                />
              </StyledImageWrapper>
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
