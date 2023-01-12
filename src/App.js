import Palette from "./components/Palette/Palette";
import { generatePalette } from "./helpers/generatePalette";
import colors from "./seedColors";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(colors[0])} />
    </div>
  );
}

export default App;
