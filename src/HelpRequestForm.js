import React, { useState, useEffect } from 'react';

function HelpRequestForm({ onAddRequest }) {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    latitude: '',
    longitude: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setFormData((prev) => ({
        ...prev,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRequest(formData);
    setFormData((prev) => ({
      ...prev,
      name: '',
      message: '',
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Help Request</h2>
      <input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
      <input name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Send Request</button>
    </form>
  );
}

export default HelpRequestForm;
