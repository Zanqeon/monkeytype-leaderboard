import media from '@app/utils/media';
import styled, { css } from 'styled-components';

export const StyledTitle = styled.div(
  ({ theme: { TYPOGRAPHY, SPACING } }) => css`
    ${TYPOGRAPHY.HEADING_2}

    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: ${SPACING['06']};

    ${media(
      'LG',
      css`
        margin-top: ${SPACING['07']};
      `
    )};
  `
);

export const StyledDescription = styled.div(
  ({ theme: { TYPOGRAPHY, COLOR } }) => css`
    ${TYPOGRAPHY.BODY_LARGE}
    color: ${COLOR.gray};
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    text-align: center;
  `
);

export const StyledWrapper = styled.div(
  ({ theme: { SPACING } }) => css`
    margin-top: ${SPACING['03']};

    ${media(
      'MD',
      css`
        margin-top: ${SPACING['05']};
        display: flex;
        justify-content: center;
      `
    )};
  `
);

export const StyledCard = styled.div`
  ${media(
    'MD',
    css`
      display: inline-block;
      min-width: 35rem;
    `
  )};
`;

export const StyledHeader = styled.div(
  ({ theme: { COLOR, RADIUS } }) => css`
    display: flex;
    position: relative;
    height: 4.4rem;
    background: ${COLOR.quaternary};
    border-top-left-radius: ${RADIUS['02']};
    border-top-right-radius: ${RADIUS['02']};
    border: 2px solid ${COLOR.white};
    border-bottom: none;
    position: relative;
  `
);

export const StyledImageWrapper = styled.div(
  ({ theme: { COLOR } }) => css`
    position: absolute;
    left: 1.6rem;
    width: 5.2rem;
    height: 5.2rem;
    border: 2px solid ${COLOR.black};
    background-color: ${COLOR.quaternary};
    border-radius: 50%;
    overflow: hidden;
    top: 1.6rem;
    content: '';
  `
);

export const StyledContentContainer = styled.div(
  ({ theme: { SPACING, COLOR, RADIUS } }) => css`
    padding: 2.8rem ${SPACING['04']} ${SPACING['04']} ${SPACING['04']};
    border: 2px solid ${COLOR.white};
    border-top: none;
    border-bottom-left-radius: ${RADIUS['02']};
    border-bottom-right-radius: ${RADIUS['02']};
    display: flex;
    flex-direction: column;

    ${media(
      'MD',
      css`
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      `
    )};
  `
);

export const StyledResult = styled.div(
  ({ theme: { SPACING } }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.4rem;
    margin-top: ${SPACING['01']};
  `
);

export const StyledName = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.BODY_LARGE_SEMIBOLD}
  `
);

export const StyledLabel = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.LABEL}

    ${media(
      'MD',
      css`
        margin-left: 1.2rem;
      `
    )};
  `
);

export const StyledWordsPerMinute = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.NUMBER_SMALL}
    margin-right: 1.2rem;
    margin-bottom: -0.3rem;

    ${media(
      'MD',
      css`
        margin-right: 0;
      `
    )};
  `
);

export const StyledAccuracy = styled.div(
  ({ theme: { TYPOGRAPHY } }) => css`
    ${TYPOGRAPHY.NUMBER_SMALL_LIGHT}
    margin-bottom: -0.3rem;
  `
);

export const StyledImageContainer = styled.div`
  position: relative;
`;

export const StyledEmoji = styled.div`
  font-size: 2rem;
  transform: rotate(35deg);
  position: absolute;
  left: 4.4rem;
  top: 0.4rem;

  ${media(
    'MD',
    css`
      left: 4.5rem;
      top: 0.3rem;
    `
  )};
`;

export const StyledNote = styled.div(
  ({ theme: { TYPOGRAPHY, COLOR } }) => css`
    ${TYPOGRAPHY.NUMBER_SMALL}
    position: absolute;
    color: ${COLOR.black};
    bottom: -0.8rem;
    right: 1.6rem;
    user-select: none;
  `
);
