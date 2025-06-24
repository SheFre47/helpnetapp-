import React, { useState } from 'react';

function HelpForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !lat || !lng) return;

    const newHelpRequest = {
      id: Date.now(),
      name,
      description,
      position: [parseFloat(lat), parseFloat(lng)],
    };

    onAdd(newHelpRequest);

    // Reset form
    setName('');
    setDescription('');
    setLat('');
    setLng('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '10px', background: '#f9f9f9' }}>
      <h3>Submit Help Request</h3>
      <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
      <input placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} /><br />
      <input placeholder="Longitude" value={lng} onChange={(e) => setLng(e.target.value)} /><br />
      <button type="submit">Send Help Request</button>
    </form>
  );
}

export default HelpForm;
