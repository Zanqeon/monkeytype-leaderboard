import styled, { css } from 'styled-components';
import media from '@app/utils/media';
import Link from 'next/link';
import InfoMessage from '@app/components/info-message';

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
`;

export const StyledContentWrapper = styled.div`
  position: relative;
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

export const StyledInfoMessage = styled(InfoMessage)``;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 4rem;

  ${media(
    'MD',
    css`
      position: absolute;
      right: 0;
      bottom: 0;
      margin-top: 0;
    `
  )};

  &:hover {
    ${StyledInfoMessage} {
      display: block;
    }
  }
`;

export const StyledImageLink = styled(Link)``;
