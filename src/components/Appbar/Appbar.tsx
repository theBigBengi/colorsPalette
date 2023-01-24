import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Appbar.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface AppbarProps {
  level: number;
  format: string;
  changeLevel: (lvl: number) => void;
  changeFormat: (format: string) => void;
}

function Appbar({ level, changeLevel, format, changeFormat }: AppbarProps) {
  const handleChange = (e: SelectChangeEvent) => {
    changeFormat(e.target.value);
  };

  const onSliderChange = (e: number | number[]) => {
    changeLevel(Number(e));
  };

  return (
    <header className="Appbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            min={100}
            max={900}
            step={100}
            value={level}
            onChange={onSliderChange}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
        </Select>
      </div>
    </header>
  );
}
export default Appbar;
