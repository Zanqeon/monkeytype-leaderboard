import styled, { css } from 'styled-components';
import media from '@app/utils/media';
import { Container } from '@totemblock/layout';
import Link from 'next/link';

export const StyledContainer = styled(Container)(
  ({ theme: { SPACING } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${SPACING['06']};

    ${media(
      'MD',
      css`
        margin-top: ${SPACING['07']};
      `
    )}
  `
);

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
`;

export const StyledContentWrapper = styled.div(
  ({ theme: { LAYOUT, SPACING } }) => css`
    position: relative;

    ${media(
      'LG',
      css`
        position: absolute;
        right: calc(
          ${LAYOUT.LAYOUT_GRID_OFFSET.LG}px - ${SPACING['03']}
        ); // offset minus the padding of the QR code image
        bottom: ${SPACING['06']};
      `
    )}
  `
);

export const StyledLink = styled(Link)(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_REGULAR}

    ${media(
      'LG',
      css`
        display: flex;
        justify-content: flex-end;
        margin-right: ${SPACING['03']}; // padding of the QR code image
      `
    )}
  `
);
