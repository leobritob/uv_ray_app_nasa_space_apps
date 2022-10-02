import { useState, useCallback } from 'react';
import { GoogleMap, Marker, LoadScript, Circle } from '@react-google-maps/api';
import { UVHelper } from '../../helpers';

const libs = ['visualization'] as never;

type MapProps = {
  lat: number;
  lng: number;
  uvi: number;
};

export function Map({ lat, lng, uvi }: MapProps) {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds({ lat, lng });
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const colors = UVHelper.getCaptionColor(uvi);

  return (
    <LoadScript
      id="google-map-script"
      googleMapsApiKey={googleMapsApiKey}
      libraries={libs}
    >
      <GoogleMap
        mapContainerStyle={{
          width: '100vw',
          height: '100vh',
        }}
        center={{ lat, lng }}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat, lng }} />
        <Circle
          options={{ fillColor: colors, strokeColor: colors }}
          center={{ lat, lng }}
          visible
          radius={5000}
        />
      </GoogleMap>
    </LoadScript>
  );
}
