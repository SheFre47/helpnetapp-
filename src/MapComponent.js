import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import helpRequests from './HelpRequests';

function MapComponent() {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {helpRequests.map((request) => (
        <Marker key={request.id} position={request.position}>
          <Popup>
            <strong>{request.name}</strong><br />
            {request.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
