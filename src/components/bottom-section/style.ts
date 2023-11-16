import styled, { css } from 'styled-components';
import media from '@app/utils/media';

export const StyledContainer = styled.div(
  ({ theme: { SPACING } }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: ${SPACING['05']};

    ${media(
      'MD',
      css`
        padding-bottom: ${SPACING['06']};
      `
    )}
  `
);
