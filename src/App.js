import React from 'react';
import './App.css';
import Grid from './Components/Grid'

function App() {
  return (
    <div className="App">
      <Grid dimensions={1000} matrixSide={4} />
    </div>
  );
}

export default App;
