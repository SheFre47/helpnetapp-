// src/MapComponent.js
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapComponent() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('/api/getHelpRequests')
      .then(res => res.json())
      .then(json => {
        if (json.success) setRequests(json.data);
      })
      .catch(console.error);
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {requests.map((req) => (
        <Marker
          key={req._id}
          position={[req.location.lat, req.location.lng]}
        >
          <Popup>
            <strong>{req.name}</strong><br />
            {req.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
            }
