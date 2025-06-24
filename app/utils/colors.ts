export const GenerateUniqueColors = (nbColors: number = 10): Array<string> => {
  let colors: Array<string> = [];
  for (let i = 0; i < nbColors; i++) {
    colors.push(`hsl(${(i * (360 / nbColors) % 360)}, 100%, 50%)`);
  }
  return colors;
}