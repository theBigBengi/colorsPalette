import chroma from 'chroma-js';
import { Palette, Color, InitPalette } from '../models';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette: {
  id: string;
  paletteName: string;
  colors: Array<{ name: string; color: string }>;
}) {
  let newPalette: Palette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} `,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)'),
      });
    }
  }
  return newPalette;
}
function getRange(hexColor: string) {
  const end = '#fff';
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor: string, numberOfColors: number) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

export { generatePalette };
