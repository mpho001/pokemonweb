import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export type Position = {
  lat: number,
  lng: number
}

type MapProps = {
  positions: Position[]
}

const containerStyle = {
  width: '700px',
  height: '500px'
};

const center = {
  lat: 32.7157,
  lng: -117.1611
};

export const GoogleMaps = ({ positions }: MapProps) => {
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
