import React, { useEffect, useState } from "react";
import chroma from "chroma-js";
import "./Palette.css";
import CollerCell from "../ColorCell/ColorCell";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function Palette({ palette }) {
  const [paletteLevel, setPaletteLevel] = useState(500);

  const colorsCells = palette.colors[paletteLevel].map(({ name, hex }) => (
    <CollerCell name={name} background={hex} />
  ));

  return (
    <div className='Palette'>
      <div className='slider'>
        <Slider
          min={100}
          max={900}
          step={100}
          value={paletteLevel}
          onChange={(val) => setPaletteLevel(val)}
        />
      </div>
      <div className='Palette-colors'>{colorsCells}</div>
    </div>
  );
}
