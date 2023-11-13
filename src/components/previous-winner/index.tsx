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
import { REGISTERED_USERS } from '@app/content';

export interface IPreviousWinnerProps {
  title: string;
  description: string;
  id: string;
  name: string;
  image?: string;
  wpm: number;
  accuracy: string;
}

const PreviousWinner = ({
  title,
  description,
  name,
  id,
  image,
  wpm,
  accuracy,
}: IPreviousWinnerProps) => {
  const showImage = REGISTERED_USERS.find((user) => user.id === id)
    ?.showDiscordImage;
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledWrapper>
        <StyledCard>
          <StyledHeader>
            {image && showImage && (
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
