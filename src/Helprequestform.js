import React, { useState, useEffect } from 'react';

const HelpRequestForm = ({ onAddRequest }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coords) {
      alert('Location not detected yet');
      return;
    }

    const newRequest = {
      id: Date.now(),
      name,
      description,
      position: coords,
    };

    onAddRequest(newRequest);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
      <h3>Request Help</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br />
      <textarea
        placeholder="What help do you need?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      /><br />
      <button type="submit">Submit Request</button>
      {coords && (
        <p>📍 Location Detected: {coords[0].toFixed(4)}, {coords[1].toFixed(4)}</p>
      )}
    </form>
  );
};

export default HelpRequestForm;
