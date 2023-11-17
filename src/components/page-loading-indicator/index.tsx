import {
  StyledContainer,
  StyledTypingMessage,
  StyledWrapper,
  StyledTitle,
  StyledMessage,
  StyledEndMessage,
} from './style';

export const LOADING_MESSAGES = [
  'Adding users',
  'Generating challenges',
  'Adding winners',
  'Updating complete',
];

const PageLoadingIndicator = () => {
  return (
    <StyledContainer>
      <StyledTitle>Loading...</StyledTitle>
      {LOADING_MESSAGES.map((message, idx) => {
        return (
          <StyledTypingMessage key={message}>
            <StyledWrapper>
              <StyledMessage
                $delayInSeconds={idx * 1.5}
                $numberOfCharacters={message.length}
              >
                {message}
              </StyledMessage>
            </StyledWrapper>
          </StyledTypingMessage>
        );
      })}
      <StyledEndMessage
        $animationDelayInSeconds={LOADING_MESSAGES.length * 1.5}
      >
        Good luck with the challenge of this month!
      </StyledEndMessage>
    </StyledContainer>
  );
};

export default PageLoadingIndicator;
