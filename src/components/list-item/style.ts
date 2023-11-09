import styled, { css } from 'styled-components';

export const StyledWrapper = styled.li`
  display: flex;
`;

export const StyledPlaceWrapper = styled.div<{ $backgroundColor: string }>(
  ({ $backgroundColor, theme: { SPACING, COLOR } }) => css`
    position: relative;
    transform: skew(-30deg);
    border: 0.2rem solid ${COLOR.white};
    padding: ${SPACING['02']} 3.6rem;
    background: ${$backgroundColor || 'none'};
    width: 9rem;
  `
);

export const StyledPlace = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_NUMBER}
    position: absolute;
    top: 50%;
    transform: skew(30deg) translateY(-50%);
    display: flex;
    justify-content: center;
    width: 2.6rem;
    user-select: none;
  `
);

export const StyledContentWrapper = styled.div<{ $hasLabel?: boolean }>(
  ({ $hasLabel, theme: { COLOR, SPACING, TYPOGRAPHY } }) => css`
    border: 0.2rem solid ${COLOR.white};
    display: flex;
    align-items: center;
    padding: ${SPACING['04']} ${SPACING['05']};
    z-index: 1;
    background-color: ${COLOR.black};
    margin-left: -2.4rem;

    ${$hasLabel &&
    css`
      ${StyledNameWrapper} {
        position: relative;

        &::after {
          content: 'Name';
          position: absolute;
          top: ${`-${SPACING['06']}`};
          left: 0;
          ${TYPOGRAPHY.LABEL}
        }
      }

      ${StyledWordsPerMinute} {
        position: relative;

        &::after {
          content: 'WPM';
          position: absolute;
          top: ${`-${SPACING['06']}`};
          right: 0;
          ${TYPOGRAPHY.LABEL}
        }
      }

      ${StyledAccuracy} {
        position: relative;

        &::after {
          content: 'Accuracy';
          position: absolute;
          top: ${`-${SPACING['06']}`};
          right: 0;
          ${TYPOGRAPHY.LABEL}
        }
      }

      ${StyledDate} {
        position: relative;

        &::after {
          content: 'Date';
          position: absolute;
          top: ${`-${SPACING['06']}`};
          right: 0;
          ${TYPOGRAPHY.LABEL}
        }
      }
    `}
  `
);

export const StyledNameWrapper = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}
    width: 24rem;
  `
);

export const StyledName = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `
);

export const StyledWordsPerMinute = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}
    width: 6rem;
    text-align: end;
    margin-bottom: ${`-${SPACING['01']}`}; // negative margin to pull the text down to the baseline of the LARGE_SEMIBOLD typography
  `
);

export const StyledAccuracy = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    width: 9rem;
    text-align: end;

    margin-bottom: ${`-${SPACING['01']}`}; // negative margin to pull the text down to the baseline of the LARGE_SEMIBOLD typography
  `
);

export const StyledDate = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    width: 8rem;
    text-align: end;
    margin-bottom: ${`-${SPACING['01']}`}; // negative margin to pull the text down to the baseline of the LARGE_SEMIBOLD typography
  `
);
