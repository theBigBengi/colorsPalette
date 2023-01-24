import React, { useState } from 'react';
// import chroma from "chroma-js";
import './Palette.css';
import CollerCell from '../ColorCell/ColorCell';
// import Slider, { Range } from "rc-slider";
import 'rc-slider/assets/index.css';
import Appbar from '../Appbar/Appbar';
import { Color, Palette as PaletteInterface } from '../../models';
import Snackbars from '../Snackbar/Snackbar';
import Footer from '../Footer/Footer';

interface PaletteProps {
  palette: PaletteInterface;
}

export default function Palette({ palette }: PaletteProps) {
  const [level, setLevel] = useState<number>(500);
  const [format, setFormat] = useState<string>('hex');
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const changeLevel = function (lvl: number) {
    setLevel(lvl);
  };

  const handleChangeFormat = function (format: string) {
    setFormat(format);
    setSnackbarMessage(`Colors format changed to ${format.toUpperCase()}`);
    setSnackbarVisible(true);
  };

  const colorsCells = palette.colors[level].map((color: Color) => {
    return (
      <CollerCell
        key={`paletteColorCell-${color.name}-${color.hex}`}
        background={color[format as keyof Color]}
        name={color.name}
      />
    );
  });

  return (
    <div className="Palette">
      <Appbar
        changeFormat={handleChangeFormat}
        changeLevel={setLevel}
        format={format}
        level={level}
      />

      <div className="Palette-colors">{colorsCells}</div>
      <Footer paletteName={palette.paletteName} />
      <Snackbars
        setOpen={setSnackbarVisible}
        message={snackbarMessage}
        open={snackbarVisible}
      />
    </div>
  );
}
