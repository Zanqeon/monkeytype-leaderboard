import { css } from 'styled-components';
import FONT from './font';
import COLOR from './color';
import media from '@app/utils/media';

const HEADING_1 = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 6.4rem;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.white};
`;

const HEADING_2 = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 3rem;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.white};

  ${media(
    'MD',
    css`
      font-size: 3.6rem;
    `
  )}
`;

const HEADING_3 = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.white};
`;

const BODY_REGULAR = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.white};
`;

const BODY_REGULAR_SEMIBOLD = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.white};
`;

const BODY_LARGE = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 1.6rem;
  font-weight: 200;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.white};

  ${media(
    'MD',
    css`
      font-size: 2rem;
    `
  )}
`;

const BODY_LARGE_SEMIBOLD = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.white};

  ${media(
    'MD',
    css`
      font-size: 2rem;
    `
  )}
`;

const BODY_NUMBER = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -4px;
  color: ${COLOR.white};

  ${media(
    'MD',
    css`
      font-size: 4.6rem;
    `
  )}
`;

const LABEL = css`
  font-family: '${FONT.FONT_PRIMARY}';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: normal;
  color: ${COLOR.gray};

  ${media(
    'MD',
    css`
      font-size: 1.4rem;
    `
  )}
`;

const TYPOGRAPHY = {
  HEADING_1,
  HEADING_2,
  HEADING_3,
  BODY_LARGE,
  BODY_LARGE_SEMIBOLD,
  BODY_REGULAR,
  BODY_REGULAR_SEMIBOLD,
  BODY_NUMBER,
  LABEL,
};

export default TYPOGRAPHY;
