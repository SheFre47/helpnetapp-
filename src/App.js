import React, { useState } from 'react';
import MapComponent from './MapComponent';
import HelpRequestForm from './HelpRequestForm';

function App() {
  const [helpRequests, setHelpRequests] = useState([]);

  const addHelpRequest = (newRequest) => {
    setHelpRequests([...helpRequests, newRequest]);
  };

  return (
    <div>
      <HelpRequestForm onAddRequest={addHelpRequest} />
      <MapComponent helpRequests={helpRequests} />
    </div>
  );
}

export default App;
