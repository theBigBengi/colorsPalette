import React, { useState } from "react";
import "./ColorCell.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CollerCell({ name, background }) {
  // const copied = false;
  const [copied, setCopied] = useState();

  const onCopy = function () {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={onCopy}>
      <div style={{ background }} className='ColorBox'>
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    </CopyToClipboard>
  );
}
