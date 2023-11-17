import styled, { css } from 'styled-components';
import media from '@app/utils/media';
import { Container } from '@totemblock/layout';
import Link from 'next/link';

export const StyledContainer = styled(Container)(
  ({ theme: { SPACING } }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${SPACING['06']};
    margin-bottom: ${SPACING['06']};

    ${media(
      'MD',
      css`
        margin: 0;
      `
    )}
  `
);

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
`;

export const StyledContentWrapper = styled.div`
  text-align: center;

  ${media(
    'MD',
    css`
      margin: 0;
      position: absolute;
      right: 0;
      bottom: 0;
    `
  )}
`;

export const StyledLink = styled(Link)(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_REGULAR}
    display: flex;
    justify-content: center;
    margin-top: ${SPACING['04']};

    ${media(
      'MD',
      css`
        display: none;
      `
    )}
  `
);

export const StyledWrapper = styled.li(
  ({ theme: { LAYOUT } }) => css`
    ${media(
      'MD',
      css`
        margin-right: ${`${LAYOUT.LAYOUT_GRID_OFFSET.MD}px`};
      `
    )};

    ${media(
      'LG',
      css`
        margin-right: ${`${LAYOUT.LAYOUT_GRID_OFFSET.LG}px`};
      `
    )};
  `
);
