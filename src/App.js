import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import HelpRequestForm from "./HelpRequestForm";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const App = () => {
  const [requests, setRequests] = useState([]);

  const addRequest = (newRequest) => {
    setRequests((prev) => [...prev, newRequest]);
  };

  return (
    <div>
      <HelpRequestForm onAddRequest={addRequest} />

      <MapContainer
        center={[-26.2041, 28.0473]} // Johannesburg default
        zoom={10}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {requests.map((req) => (
          <Marker key={req.id} position={req.position}>
            <Popup>
              <strong>{req.name}</strong>
              <br />
              {req.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default App;
