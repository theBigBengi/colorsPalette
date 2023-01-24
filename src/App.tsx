import React from 'react';
import Palette from './components/Palette/Palette';
import { generatePalette } from './helpers/generatePalette';
import palettes from './seedColors';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const displaySnackbar = (open: boolean, message: string) => {
    setOpen(open);
    setSnackbarMessage(message);
  };

  return (
    <div>
      <Palette palette={generatePalette(palettes[0])} />
    </div>
  );
};

export default App;
