import { Container } from '@totemblock/layout';
import styled, { css } from 'styled-components';

const StyledTitle = styled(Container)(
  ({ theme: { TYPOGRAPHY, COLOR, SPACING } }) => css`
    ${TYPOGRAPHY.HEADING_1}
    color: ${COLOR.white};
    margin-top: ${SPACING['06']};
  `
);

export default function Custom404() {
  return (
    <Container>
      <StyledTitle>404 - Page not found</StyledTitle>{' '}
    </Container>
  );
}
