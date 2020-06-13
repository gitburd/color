import React from 'react';
import './App.css';
import seedColors from './seedColors'
import Palette from './Palette'

function App() {
  return (
   <div>
     <Palette {...seedColors[4]}/>
   </div>
  );
}

export default App;
