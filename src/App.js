import React, { useState } from 'react';
import HelpRequestForm from './HelpRequestForm';
import MapComponent from './MapComponent';

function App() {
  const [helpRequests, setHelpRequests] = useState([]);

  const handleAddRequest = (newRequest) => {
    setHelpRequests((prev) => [...prev, newRequest]);
  };

  return (
    <div>
      <HelpRequestForm onAddRequest={handleAddRequest} />
      <MapComponent helpRequests={helpRequests} />
    </div>
  );
}

export default App;
