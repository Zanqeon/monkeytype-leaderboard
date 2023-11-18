import styled, { css } from 'styled-components';
import media from '@app/utils/media';
import { Container } from '@totemblock/layout';

export const StyledContainer = styled(Container)(
  ({ theme: { SPACING } }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: ${SPACING['06']};
  `
);

export const StyledCurrentChallengeDesktop = styled.div`
  display: none;

  ${media(
    'MD',
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  )}
`;

export const StyledCurrentChallengeMobile = styled.div(
  ({ theme: { SPACING } }) => css`
    margin-top: ${SPACING['06']};
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media(
      'MD',
      css`
        display: none;
      `
    )}
  `
);

export const StyledCurrentChallengeTitle = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.HEADING_1}
    text-transform: capitalize;
    margin-top: ${SPACING['02']};
  `
);

export const StyledCurrentChallengeDescription = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.HEADING_3}
  `
);

export const StyledNextChallenge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledNextChallengeTitle = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.HEADING_2}
  `
);

export const StyledNextChallengeDescription = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    text-transform: capitalize;
    margin-top: ${SPACING['02']};
  `
);

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 10rem;
  overflow: hidden;

  ${media(
    'MD',
    css`
      width: 16rem;
      height: 10rem;
    `
  )}
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
