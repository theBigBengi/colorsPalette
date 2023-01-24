import React from 'react';

interface FooterProps {
  paletteName: string;
}

export default function Footer({ paletteName }: FooterProps) {
  return <footer className="Palette-footer">{paletteName}</footer>;
}
