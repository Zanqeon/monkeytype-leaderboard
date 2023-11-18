import { Container } from '@totemblock/layout';
import styled, { css } from 'styled-components';

const StyledTitle = styled(Container)(
  ({ theme: { TYPOGRAPHY, COLOR, SPACING } }) => css`
    ${TYPOGRAPHY.HEADING_1}
    color: ${COLOR.white};
    margin-top: ${SPACING['06']};
  `
);

export default function Custom500() {
  return (
    <Container>
      <StyledTitle>500 - Server-side error occurred</StyledTitle>{' '}
    </Container>
  );
}
