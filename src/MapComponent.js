// src/MapComponent.js
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function MapComponent() {
  const [helpRequests, setHelpRequests] = useState([]);

  useEffect(() => {
    fetch('/api/getHelpRequests')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setHelpRequests(data.data);
        }
      })
      .catch(err => console.error('Error loading help requests:', err));
  }, []);

  return (
    <MapContainer center={[-26.2041, 28.0473]} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {helpRequests.map((request, index) => (
        <Marker
          key={index}
          position={[request.latitude, request.longitude]}
          icon={customIcon}
        >
          <Popup>
            <strong>{request.name}</strong><br />
            {request.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
                                                     }
