import React from 'react';
import MapComponent from './MapComponent'; // 🧠 Import your new map
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🚑 HelpNet App</h1>
      <p>Welcome! This app helps coordinate real-time disaster support.</p>
      <p>Here’s a real-time map for better coordination:</p>

      {/* 🗺️ Show the map */}
      <MapComponent />

      <p style={{ marginTop: '20px' }}>More features coming soon...</p>
    </div>
  );
}

export default App;
