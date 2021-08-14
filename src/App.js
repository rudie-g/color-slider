import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import RgbSlider from './components/RgbSlider'
import RgbDisplay from './components/RgbDisplay'
// hring information from all three rgbsliders, assign to respective colors in the RgbDisplay

function App() {
  const [ colors, setColors ] = useState({
    red: 0,
    blue: 0,
    green: 0
  });

  function updateColor(name, value) {
    setColors({...colors, [name]: value})
  }

  const colorDisplay = useRef(`rgb(${colors.red},${colors.green},${colors.blue})`);

  useEffect(()=>{
    colorDisplay.current = `rgb(${colors.red},${colors.green},${colors.blue})`;
  })
  
  return (
    <div className="App">
      <h1>Welcome to the RGBer!</h1>
      <hr />
      <RgbSlider updateColor={updateColor} color="red" />
      <p>Red</p>
      <hr />
      <RgbSlider updateColor={updateColor} color="blue" />
      <p>Blue</p>
      <hr />
      <RgbSlider updateColor={updateColor} color="green" />
      <p>Green</p>
      <hr />
      <RgbDisplay bgColor={colorDisplay.current} colorRed={colors.red} colorBlue={colors.blue} colorGreen={colors.green} />
    </div>
  );
}

export default App;
