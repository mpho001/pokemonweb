import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '500px'
};

const center = {
  lat: 32.7157,
  lng: -117.1611
};

const positions = [
  {
    lat: 32.7157,
    lng: -117.1611
  },
  {
    lat: 32.639954,
    lng: -117.106705
  }
]

function GoogleMaps() {
  return (
    <LoadScript
      googleMapsApiKey={`${process.env.GOOGLE_MAPS_API_KEY}`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      {
        positions.map((position, i) => (
          <Marker position={position} key={i} />
        ))
      }
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)