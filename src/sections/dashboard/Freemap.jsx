import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons using standard open-source assets
const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const FreeRoutingMap = () => {
  const ahmedabadCenter = [23.0225, 72.5714];
  
  // Coordinates in [Latitude, Longitude] format for Leaflet
  const stationLocation = [23.0300, 72.5400]; 
  const [accidentLocation, setAccidentLocation] = useState([23.0500, 72.5850]);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [routeStats, setRouteStats] = useState({ distance: 0, duration: 0 });

  // Fetch routing path from the free OSRM API
  const calculateRoute = async (start, end) => {
    try {
      // OSRM expects coordinates in [Longitude,Latitude] format inside the URL string
      const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.code === 'Ok' && data.routes.length > 0) {
        const route = data.routes[0];
        
        // OSRM returns [Lng, Lat], Leaflet needs [Lat, Lng], so we flip them
        const flippedCoords = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
        
        setRouteCoordinates(flippedCoords);
        setRouteStats({
          distance: (route.distance / 1000).toFixed(2), // meters to km
          duration: Math.ceil(route.duration / 60) // seconds to minutes
        });
      }
    } catch (error) {
      console.error("Error fetching path from free OSRM server:", error);
    }
  };

  useEffect(() => {
    calculateRoute(stationLocation, accidentLocation);
  }, [accidentLocation]);

  const triggerNewAccident = () => {
    // Generates a random coordinate within city limits
    const randomLat = 22.9800 + Math.random() * 0.12;
    const randomLng = 72.5000 + Math.random() * 0.12;
    setAccidentLocation([randomLat, randomLng]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.controlPanel}>
        <h3 style={{ margin: 0, color: '#d32f2f' }}>🚨 Open-Source Dispatch System</h3>
        <button style={styles.btn} onClick={triggerNewAccident}>Simulate New Crash Location</button>
        
        {routeStats.distance > 0 && (
          <div style={styles.stats}>
            <p style={styles.text}><strong>Distance:</strong> {routeStats.distance} km</p>
            <p style={styles.text}><strong>Est. Travel Time:</strong> {routeStats.duration} mins</p>
          </div>
        )}
      </div>

      <MapContainer center={ahmedabadCenter} zoom={12} style={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={stationLocation} icon={greenIcon}>
          <Popup>Emergency Station Base</Popup>
        </Marker>

        <Marker position={accidentLocation} icon={redIcon}>
          <Popup>Accident Site Location</Popup>
        </Marker>

        {routeCoordinates.length > 0 && (
          <Polyline positions={routeCoordinates} color="#d32f2f" weight={15} opacity={0.7} />
        )}
      </MapContainer>
    </div>
  );
};

const styles = {
  container: { display: 'flex', flexDirection: 'column', width: '100%', height: '600px', fontFamily: 'sans-serif' },
  controlPanel: { padding: '15px', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid #ddd' },
  btn: { padding: '8px 12px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', alignSelf: 'flex-start' },
  stats: { backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '4px', borderLeft: '4px solid #1976d2' },
  text: { margin: '4px 0', fontSize: '14px' },
  map: { width: '100%', flexGrow:1 }
};

export default FreeRoutingMap;