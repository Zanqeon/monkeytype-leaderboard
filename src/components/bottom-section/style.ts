import styled, { css } from 'styled-components';
import media from '@app/utils/media';
import { Container } from '@totemblock/layout';

export const StyledContainer = styled(Container)(
  ({ theme: { SPACING } }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: ${SPACING['05']};
    position: relative;

    ${media(
      'MD',
      css`
        padding-bottom: ${SPACING['06']};
      `
    )}
  `
);
