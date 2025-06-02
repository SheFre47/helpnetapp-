import React from 'react';
import MapComponent from './MapComponent.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🌍 HelpNet App</h1>
      <p>Real-time help requests map</p>
      <MapComponent />
    </div>
  );
}

export default App;
