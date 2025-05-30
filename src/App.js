import React, { useState } from "react";

function App() {
  const [requests, setRequests] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const addRequest = () => {
    if (name && location) {
      setRequests([...requests, { name, location }]);
      setName("");
      setLocation("");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🚨 Help Request Map</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 10, padding: 5 }}
        />
        <input
          type="text"
          placeholder="Your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ marginRight: 10, padding: 5 }}
        />
        <button onClick={addRequest} style={{ padding: 5 }}>
          Request Help
        </button>
      </div>

      <h3>📍 Active Requests</h3>
      <ul>
        {requests.map((req, i) => (
          <li key={i}>
            <strong>{req.name}</strong> needs help at <em>{req.location}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
