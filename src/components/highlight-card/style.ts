import media from '@app/utils/media';
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.li`
  ${media(
    'MD',
    css`
      min-width: 24rem;
    `
  )};
`;

export const StyledImageWrapper = styled.div(
  ({ theme: { COLOR } }) => css`
    position: absolute;
    left: 1.6rem;
    width: 4.8rem;
    height: 4.8rem;
    border: 2px solid ${COLOR.black};
    border-radius: 50%;
    overflow: hidden;
    top: 1.6rem;
    content: '';

    ${media(
      'MD',
      css`
        width: 7rem;
        height: 7rem;
        top: 2.5rem;
      `
    )};
  `
);

export const StyledName = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}

    position: absolute;
    bottom: -2.6rem;
    left: 7.2rem;

    ${media(
      'MD',
      css`
        position: absolute;
        left: 1.6rem;
        bottom: -6.4rem;
      `
    )};
  `
);

export const StyledRecordType = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.LABEL}
    font-size: 1rem;

    ${media(
      'MD',
      css`
        margin-bottom: 0.8rem;
        font-size: 1.4rem;
      `
    )};
  `
);

export const StyledRecordAccuracy = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_REGULAR}
    font-size: 1.2rem;
    margin-bottom: -4px;

    ${media(
      'MD',
      css`
        font-size: 1.6rem;
      `
    )};
  `
);

export const StyledRecordWordsPerMinute = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}
    font-size: 2.4rem;

    ${media(
      'MD',
      css`
        font-size: 3.2rem;
      `
    )};
  `
);

export const StyledRecordContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 0.4rem;
  gap: 0.4rem;
`;

export const StyledRecord = styled.div(
  ({ theme: { SPACING } }) => css`
    padding: ${SPACING['02']};
  `
);

export const StyledRecordList = styled.div(
  ({ theme: { SPACING, COLOR, RADIUS } }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 3.2rem ${SPACING['02']} ${SPACING['02']} ${SPACING['02']};
    border: 2px solid ${COLOR.white};
    border-top: none;
    border-bottom-left-radius: ${RADIUS['02']};
    border-bottom-right-radius: ${RADIUS['02']};

    ${media(
      'MD',
      css`
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        padding-top: 6.4rem;
      `
    )};
  `
);

export const StyledHeader = styled.div<{ $backgroundColor: string }>(
  ({ $backgroundColor, theme: { COLOR, RADIUS, SPACING } }) => css`
    display: flex;
    position: relative;
    height: ${SPACING['06']};
    background: ${$backgroundColor};
    border-top-left-radius: ${RADIUS['02']};
    border-top-right-radius: ${RADIUS['02']};
    border: 2px solid ${COLOR.white};
    border-bottom: none;
    justify-content: flex-end;
    align-items: center;

    ${media(
      'MD',
      css`
        height: 6rem;
      `
    )};
  `
);

export const StyledPlace = styled.div`
  display: flex;
  margin-right: 1.2rem;
  padding-top: 2px;
`;

export const StyledPlaceNumber = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.NUMBER}
  `
);
export const StyledPlaceSuffix = styled.div<{ $place: number }>(
  ({ $place, theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    ${$place === 1 && `margin-left: 0.2rem;`}
    ${$place === 2 && `margin-left: 0.3rem;`}
    ${$place === 3 && `margin-left: 0.4rem;`}

    font-size: 1.8rem;
  `
);
