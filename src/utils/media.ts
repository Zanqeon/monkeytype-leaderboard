import LAYOUT from '@app/theme/basic/layout';
import { css, CSSProp } from 'styled-components';

export default function media(
  size: keyof typeof LAYOUT.LAYOUT_BREAKPOINTS,
  css_string: CSSProp
) {
  return css`
    @media screen and (min-width: ${LAYOUT.LAYOUT_BREAKPOINTS[size]}px) {
      ${css_string}
    }
  `;
}
