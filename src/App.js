import React, { useState } from 'react';
import HelpForm from './HelpForm';
import MapComponent from './MapComponent';

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
