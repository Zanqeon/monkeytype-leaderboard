import media from '@app/utils/media';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div(
  ({ theme: { COLOR, TYPOGRAPHY, SPACING, RADIUS } }) => css`
    ${TYPOGRAPHY.HEADING_3}
    border: 0.2rem ${COLOR.white} solid;
    border-radius: ${RADIUS['02']};
    overflow: hidden;
    width: 100%;
    position: relative;
    margin-bottom: ${SPACING['05']};
    z-index: 1;

    opacity: 0;
    animation: fade-in ease-in-out 0.4s;
    animation-fill-mode: forwards;

    ${media(
      'MD',
      css`
        width: auto;
        display: none;
        position: absolute;
        bottom: calc(100% + 1.6rem);
        right: 0;
        max-width: none;
        margin-bottom: 0;
        border-bottom-right-radius: 0;
      `
    )};
  `
);

export const StyledHeading = styled.div(
  ({ theme: { COLOR, SPACING, TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.HEADING_3}
    padding: ${SPACING['03']};
    background-color: ${COLOR.primary};
    border-bottom: 0.2rem ${COLOR.white} solid;
    text-align: center;
  `
);

export const StyledBody = styled.ol(
  ({ theme: { TYPOGRAPHY, SPACING, COLOR } }) => css`
    ${TYPOGRAPHY.LABEL}
    list-style: decimal-leading-zero;
    list-style-position: inside;
    padding: ${SPACING['04']};
    background-color: ${COLOR.black};
    text-align: left;
  `
);

export const StyledListItem = styled.li(
  ({ theme: { COLOR, SPACING } }) => css`
    color: ${COLOR.gray};

    ${media(
      'MD',
      css`
        white-space: nowrap;
      `
    )};

    & + & {
      margin-top: ${SPACING['01']};
    }
  `
);
