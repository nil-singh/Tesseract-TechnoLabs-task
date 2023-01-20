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
    </div>
  );
}

export default App;
