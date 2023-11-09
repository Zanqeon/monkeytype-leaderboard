import 'styled-components';
import COLOR from '@app/theme/basic/color';
import RADIUS from '@app/theme/basic/radius';
import SPACING from '@app/theme/basic/spacing';
import typography from '@app/theme/basic/typography';

declare module 'styled-components' {
  export type TBreakPoints = {
    XXS: number;
    XS: number;
    SM: number;
    MD: number;
    LG: number;
  };

  export type Typography = typeof typography;

  export interface DefaultTheme {
    COLOR: typeof COLOR;
    FONT: {
      FONT_PRIMARY: string;
    };
    TYPOGRAPHY: Typography;
    LAYOUT: {
      LAYOUT_MAX_CONTAINER_WIDTH: number;
      LAYOUT_GRID_COLUMNS: number;
      LAYOUT_BREAKPOINTS: TBreakPoints;
      LAYOUT_GRID_GAP: TBreakPoints;
      LAYOUT_GRID_OFFSET: TBreakPoints;
      LAYOUT_EXTRA_WIDTH: TBreakPoints;
    };
    SPACING: typeof SPACING;
    RADIUS: typeof RADIUS;
  }
}
