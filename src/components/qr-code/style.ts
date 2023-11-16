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

export const StyledImageWrapper = styled.div(
  ({ theme: { SPACING } }) => css`
    position: relative;
    width: 18rem;
    height: 18rem;
    margin-bottom: ${SPACING['04']};
  `
);

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
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_REGULAR}

    ${media(
      'MD',
      css`
        display: flex;
        justify-content: flex-end;
      `
    )}
  `
);

export const StyledWrapper = styled.li(
  ({ theme: { SPACING } }) => css`
    ${media(
      'MD',
      css`
        margin-right: ${SPACING['07']};
      `
    )};
  `
);
