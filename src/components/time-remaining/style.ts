import styled, { css } from 'styled-components';
import media from '@app/utils/media';

export const StyledContentWrapper = styled.div(
  ({ theme: { SPACING } }) => css`
    position: relative;
    text-align: center;
    margin-top: ${SPACING['06']};

    ${media(
      'MD',
      css`
        text-align: start;
        margin-top: 0;
      `
    )}
  `
);

export const StyledWrapper = styled.div`
  ${media(
    'MD',
    css`
      margin: 0;
      position: absolute;
      left: 0;
      bottom: 1.2rem;
    `
  )}
`;

export const StyledTitle = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.HEADING_2}
  `
);

export const StyledTime = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}

    margin-top: ${SPACING['01']};
    display: flex;
    flex-direction: column;
    animation: fade-in 0.4s ease-in forwards;
  `
);
