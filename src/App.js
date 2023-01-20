import React from 'react';
import Stock from './CandleChart';
import './App.css';
import ApiData from './Component/ApiData';
import CandleChart from './CandleChart';

function App() {
  return (
    <div className="App">
      <CandleChart/>
      <br/>
      <p>Task by <b>Nilesh Anand</b></p>
     <p>Plaese Find The Source <a href='https://github.com/nil-singh/Tesseract-TechnoLabs-task'>Code here </a></p>
    </div>
  );
}

export default App;
