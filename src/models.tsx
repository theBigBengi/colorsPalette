export interface Palette {
  id: string;
  paletteName: string;
  // emoji: string;
  colors: { [key: number | string]: Array<Color> };
}

export interface InitPalette {
  id: string;
  paletteName: string;
  colors: Array<{ name: string; color: string }>;
}

export interface Color {
  name: string;
  id: string;
  hex: string;
  rgb: string;
  rgba: string;
}
