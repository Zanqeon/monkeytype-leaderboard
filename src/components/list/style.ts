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

    ${media(
      'MD',
      css`
        margin-top: ${SPACING['07']};
        max-height: 36rem;
      `
    )}
  `
);
