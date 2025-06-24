import React, { useState } from 'react';
import MapComponent from './MapComponent';
import HelpForm from './HelpForm';

function App() {
  const [requests, setRequests] = useState([]);

  const addRequest = (newRequest) => {
    setRequests([...requests, newRequest]);
  };

  return (
    <div>
      <HelpForm onAdd={addRequest} />
      <MapComponent helpRequests={requests} />
    </div>
  );
}

export default App;
