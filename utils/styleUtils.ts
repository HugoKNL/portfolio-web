export function pxToRem(px: number, baseFontSize: number = 16): string {
  const rem = px / baseFontSize;
  return `${rem}rem`;
}
