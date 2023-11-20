import styled, { css } from 'styled-components';
import media from '@app/utils/media';

export const StyledList = styled.ul(
  ({ theme: { SPACING } }) => css`
    margin-top: ${SPACING['06']};
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
    gap: ${SPACING['02']};
    position: relative;
    animation: fade-in 0.4s ease-in forwards;

    ${media(
      'MD',
      css`
        margin-top: 6rem;
        max-height: 36rem;
      `
    )}

    ${media(
      'LG',
      css`
        margin-top: ${SPACING['07']};
      `
    )}
  `
);
