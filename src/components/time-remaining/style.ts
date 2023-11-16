import styled, { css } from 'styled-components';
import media from '@app/utils/media';
import { Container } from '@totemblock/layout';

export const StyledContainer = styled(Container)(
  ({ theme: { SPACING } }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${SPACING['06']};

    ${media(
      'MD',
      css`
        margin-top: 0;
        margin-bottom: 0;
      `
    )}
  `
);

export const StyledContentWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100%;

  ${media(
    'MD',
    css`
      text-align: start;
    `
  )}
`;

export const StyledWrapper = styled.div`
  height: 12rem;

  ${media(
    'MD',
    css`
      margin: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 14.2rem;
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
