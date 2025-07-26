import React, { useState } from "react";

const HelpRequestForm = ({ onAddRequest }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState([null, null]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !position[0]) return;

    const newRequest = {
      id: Date.now(),
      name,
      description,
      position,
    };

    onAddRequest(newRequest);
    setName("");
    setDescription("");
  };

  // Auto-detect location
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Location error:", err.message);
        }
      );
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Submit Help Request</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="What do you need?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default HelpRequestForm;
