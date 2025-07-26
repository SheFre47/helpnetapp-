import React, { useState, useEffect } from 'react';

function HelpRequestForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
          setLocationError('Could not detect your location. Please enter it manually.');
        }
      );
    } else {
      setLocationError('Geolocation not supported on this device.');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      name,
      description,
      position: [parseFloat(latitude), parseFloat(longitude)],
    };
    onSubmit(requestData); // will be handled in parent
    // Reset form
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Request Help</h2>

      {locationError && <p style={{ color: 'red' }}>{locationError}</p>}

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br /><br />

      <textarea
        placeholder="Describe your emergency"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea><br /><br />

      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        required
      /><br /><br />

      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        required
      /><br /><br />

      <button type="submit">Send Help Request</button>
    </form>
  );
}

export default HelpRequestForm;
