import styled, { css } from 'styled-components';
import media from '@app/utils/media';

export const StyledTitle = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    text-align: center;
    ${TYPOGRAPHY.HEADING_2}
  `
);

export const StyledList = styled.ul(
  ({ theme: { SPACING } }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    ${media(
      'MD',
      css`
        margin-top: ${SPACING['06']};
        flex-direction: row;
        gap: ${SPACING['05']};
        justify-content: center;
      `
    )}
  `
);
