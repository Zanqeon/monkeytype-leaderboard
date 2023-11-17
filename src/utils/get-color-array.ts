import { useTheme } from 'styled-components';

/**
 * @param color Hex value format: #ffffff or ffffff
 * @param decimal lighten or darken decimal value, example 0.5 to lighten by 50% or 1.5 to darken by 50%.
 */
function shadeColor(color: string, decimal: number): string {
  const base = color.startsWith('#') ? 1 : 0;

  let r = parseInt(color.substring(base, 3), 16);
  let g = parseInt(color.substring(base + 2, 5), 16);
  let b = parseInt(color.substring(base + 4, 7), 16);

  r = Math.round(r / decimal);
  g = Math.round(g / decimal);
  b = Math.round(b / decimal);

  r = r < 255 ? r : 255;
  g = g < 255 ? g : 255;
  b = b < 255 ? b : 255;

  const rr =
    r.toString(16).length === 1 ? `0${r.toString(16)}` : r.toString(16);
  const gg =
    g.toString(16).length === 1 ? `0${g.toString(16)}` : g.toString(16);
  const bb =
    b.toString(16).length === 1 ? `0${b.toString(16)}` : b.toString(16);

  return `#${rr}${gg}${bb}`;
}

export function generateIndexForArrayBasedOnSeed(seed: string, array: any[]) {
  let sum = 0;
  for (let i = 0; i < seed.length; i++) {
    sum += seed.charCodeAt(i);
  }
  let result = sum % array.length;
  return result;
}

export function generateColorScheme(color: string, accentColorSeed: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { COLOR } = useTheme();
  const ACCENT_COLORS = [
    COLOR.primary,
    COLOR.secondary,
    COLOR.tertiary,
    COLOR.quaternary,
  ].filter((item) => item.toLowerCase() !== color.toLowerCase());

  const accentColor =
    ACCENT_COLORS[
      generateIndexForArrayBasedOnSeed(accentColorSeed, ACCENT_COLORS)
    ];

  //Return an array with the input color + a shade lighter & darker + another main theme color that is different than the input
  return [color, accentColor, shadeColor(color, 1.2), shadeColor(color, 0.8)];
}

export const useGenerateColorSchemeArrayForUsername = (username: string) => {
  const { COLOR } = useTheme();

  const COLOR_GRADIENT_MAP = [
    generateColorScheme(COLOR.primary, username),
    generateColorScheme(COLOR.secondary, username),
    generateColorScheme(COLOR.tertiary, username),
    generateColorScheme(COLOR.quaternary, username),
  ];

  return COLOR_GRADIENT_MAP[
    generateIndexForArrayBasedOnSeed(username, COLOR_GRADIENT_MAP)
  ];
};
