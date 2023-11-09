import media from '@app/utils/media';
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.li`
  display: flex;
  width: 100%;

  ${media(
    'MD',
    css`
      width: auto;
    `
  )}
`;

export const StyledPlaceWrapper = styled.div<{ $backgroundColor: string }>(
  ({ $backgroundColor, theme: { SPACING, COLOR } }) => css`
    position: relative;
    transform: skew(-30deg);
    transform-origin: bottom left;
    border: 0.2rem solid ${COLOR.white};
    padding: ${SPACING['02']} 2.4rem;
    background: ${$backgroundColor || 'none'};

    ${media(
      'MD',
      css`
        width: 10rem;
        padding: ${SPACING['02']} 3.6rem;
      `
    )}
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
    user-select: none;
    width: 3.2rem;
    left: 1.2rem;

    ${media(
      'MD',
      css`
        left: 2.8rem;
      `
    )}
  `
);

export const StyledContentWrapper = styled.div<{
  $hasLabelMobile?: boolean;
  $hasLabelDesktop?: boolean;
}>(
  ({
    $hasLabelMobile,
    $hasLabelDesktop,
    theme: { COLOR, SPACING, TYPOGRAPHY },
  }) => css`
    border: 0.2rem solid ${COLOR.white};
    display: flex;
    align-items: center;
    padding: ${SPACING['03']} ${SPACING['03']};
    z-index: 1;
    background-color: ${COLOR.black};
    flex: 1;
    justify-content: space-between;

    ${media(
      'MD',
      css`
        padding: ${SPACING['04']} ${SPACING['05']};
        justify-content: inherit;
        margin-left: -2.4rem;
      `
    )}

    ${$hasLabelDesktop &&
    css`
      ${StyledNameWrapper},
      ${StyledWordsPerMinute},
      ${StyledAccuracy},
      ${StyledDate} {
        position: relative;
        height: 100%;

        &::after {
          display: none;
          ${TYPOGRAPHY.LABEL}
          top: -4rem;
          position: absolute;
        }

        ${media(
          'MD',
          css`
            &::after {
              top: -4.5rem;
              display: block;
            }
          `
        )}
      }

      ${StyledNameWrapper} {
        &::after {
          content: 'Name';
          left: 0;
          top: -3.8rem; //0.2 rem smaller than 'top' of the other labels
        }
        ${media(
          'MD',
          css`
            &::after {
              top: -4.3rem; //0.2 rem smaller than 'top' of the other labels
            }
          `
        )}
      }

      ${StyledWordsPerMinute} {
        &::after {
          content: 'WPM';
          right: 0;
        }
      }

      ${StyledAccuracy} {
        &::after {
          content: 'Accuracy';
          right: 0;
        }
      }

      ${StyledDate} {
        &::after {
          content: 'Date';
          right: 0;
        }
      }
    `}
    
    ${$hasLabelMobile &&
    css`
      ${StyledNameWrapper},
      ${StyledWordsPerMinute},
      ${StyledAccuracy},
      ${StyledDate} {
        &::after {
          display: block;
        }
      }
    `}
  `
);

export const StyledNameWrapper = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}
    max-width: 10rem;
    flex: 1;

    ${media(
      'MD',
      css`
        max-width: 12rem;
      `
    )}

    ${media(
      'LG',
      css`
        min-width: 24rem;
      `
    )}
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
    width: 3rem;
    text-align: end;
    margin-bottom: ${`-${SPACING['01']}`}; // negative margin to pull the text down to the baseline of the LARGE_SEMIBOLD typography

    ${media(
      'LG',
      css`
        width: 6rem;
      `
    )}
  `
);

export const StyledAccuracy = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    width: 6.4rem;
    text-align: end;
    margin-bottom: ${`-${SPACING['01']}`}; // negative margin to pull the text down to the baseline of the LARGE_SEMIBOLD typography

    ${media(
      'MD',
      css`
        width: 8rem;
      `
    )}

    ${media(
      'LG',
      css`
        width: 9rem;
      `
    )}
  `
);

export const StyledDate = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    width: 5rem;
    text-align: end;
    margin-bottom: ${`-${SPACING['01']}`}; // negative margin to pull the text down to the baseline of the LARGE_SEMIBOLD typography

    ${media(
      'MD',
      css`
        width: 7rem;
      `
    )}

    ${media(
      'LG',
      css`
        width: 8rem;
      `
    )}
  `
);
