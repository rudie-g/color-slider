import './App.css';
import React, { useState } from 'react';
import RgbSlider from './components/RgbSlider'
import RgbDisplay from './components/RgbDisplay'
// Bring information from all three rgbsliders, assign to respective colors in the RgbDisplay

function App() {
  const [ colorRed, setColorRed ] = useState(0);
  const [ colorBlue, setColorBlue ] = useState(0);
  const [ colorGreen, setColorGreen ] = useState(0);
  
  return (
    <div className="App">
      <h1>Welcome to the RGBer!</h1>
      <RgbSlider setColor={setColorRed} color="Red" />
      <RgbSlider setColor={setColorBlue} color="Blue" />
      <RgbSlider setColor={setColorGreen} color="Green" />
      <RgbDisplay />
    </div>
  );
}

export default App;
