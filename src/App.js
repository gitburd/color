import React from 'react';
import 'rc-slider/assets/index.css';
import './App.css';
import seedColors from './seedColors'
import Palette from './components/Palette'
import { generatePalette } from './colorHelpers'

function App() {
  return (
   <div>
     <Palette palette={generatePalette(seedColors[4])}/>
   </div>
  );
}

export default App;
