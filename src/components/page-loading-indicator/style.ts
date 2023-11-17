import styled, { css } from 'styled-components';
import media from '@app/utils/media';
import { Container } from '@totemblock/layout';

export const StyledContainer = styled(Container)`
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const StyledTypingMessage = styled.div``;

export const StyledWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledTitle = styled.h1(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.HEADING_2}
    margin-top: ${SPACING['06']};
    margin-bottom: ${SPACING['02']};

    ${media(
      'MD',
      css`
        ${TYPOGRAPHY.HEADING_1}
        margin-top: ${SPACING['07']};
        margin-bottom: ${SPACING['02']};
      `
    )}
  `
);

export const StyledMessage = styled.p<{
  $delayInSeconds: number;
  $numberOfCharacters: number;
}>(
  ({ theme: { TYPOGRAPHY }, $delayInSeconds, $numberOfCharacters }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    height: auto;
    width: 0;
    overflow: hidden;
    border-right: 0.8rem solid transparent;
    white-space: nowrap;
    margin-left: 0 auto;
    animation:
      typing 1s steps(${$numberOfCharacters}, end),
      caret 1s;
    animation-delay: ${`${$delayInSeconds}s`};
    animation-fill-mode: forwards;
  `
);

export const StyledEndMessage = styled.p<{ $animationDelayInSeconds: number }>(
  ({ theme: { TYPOGRAPHY, SPACING }, $animationDelayInSeconds }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}
    margin-top: ${SPACING['04']};

    opacity: 0;
    animation: fade-in ease-in 0.5s;
    animation-fill-mode: forwards;
    animation-delay: ${`${$animationDelayInSeconds}s`};
  `
);
