import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import RgbSlider from './components/RgbSlider'
import RgbDisplay from './components/RgbDisplay'
// hring information from all three rgbsliders, assign to respective colors in the RgbDisplay

function App() {
  const [ colorRed, setColorRed ] = useState(0);
  const [ colorBlue, setColorBlue ] = useState(0);
  const [ colorGreen, setColorGreen ] = useState(0);
  let red = "Red";
  let blue = "Blue";
  let green = "Green";
  const colorDisplay = useRef(`rgb(${colorRed},${colorGreen},${colorBlue})`);

  useEffect(()=>{
    colorDisplay.current = `rgb(${colorRed},${colorGreen},${colorBlue})`;
  })
  
  return (
    <div className="App">
      <h1>Welcome to the RGBer!</h1>
      <hr />
      <RgbSlider setColor={setColorRed} color={red} />
      <p>{colorRed}</p>
      <hr />
      <RgbSlider setColor={setColorBlue} color={blue} />
      <p>{colorBlue}</p>
      <hr />
      <RgbSlider setColor={setColorGreen} color={green} />
      <p>{colorGreen}</p>
      <hr />
      <RgbDisplay bgColor={colorDisplay.current} colorRed={colorRed} colorBlue={colorBlue} colorGreen={colorGreen} />
    </div>
  );
}

export default App;
