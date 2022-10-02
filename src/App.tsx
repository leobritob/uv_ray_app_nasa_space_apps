import { useEffect, useState } from 'react';

import { Loader, MapStatus, TabBar, Map } from './components';
import { GeoHelper } from './helpers';
import { OpenWeatherService } from './services';

type ICoords = {
  lat: number;
  lng: number;
};

const DIFF = 0.05;

export default function App() {
  const [currentCoord, setCurrentCoord] = useState<ICoords | undefined>();
  const [coords, setCoords] = useState<ICoords[] | undefined>([]);
  const [uvi, setUVI] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        const res = await GeoHelper.getCurrentLocation();
        if (res.latitude && res.longitude) {
          const lat = Number(Number(res.latitude).toFixed(2));
          const lng = Number(Number(res.longitude).toFixed(2));
          setCurrentCoord({ lat, lng });
          setCoords([
            { lat, lng },
            { lat: lat + DIFF, lng },
            { lat, lng: lng + DIFF },
            { lat: lat - DIFF, lng },
            { lat, lng: lng - DIFF },
          ]);
        }
      } catch (error) {
        console.log('🚀 ~ file: App.tsx ~ line 28 ~ load ~ error', error);
      }
    }

    load();
  }, []);

  useEffect(() => {
    async function load() {
      let total = 0;
      await Promise.all(
        (coords || []).map(async (coord) => {
          const openRes = await OpenWeatherService.oneCall(
            coord.lat,
            coord.lng
          );
          total += openRes.data.current.uvi;
        })
      );
      total = Number(Number(total / (coords || []).length).toFixed(2));

      setUVI(total || 0);
    }

    load();
  }, [coords]);

  return (
    <>
      {currentCoord ? (
        <div className="w-full h-[calc(h-screen,44px)] rounded-md">
          <MapStatus lat={currentCoord.lat} lng={currentCoord.lng} uvi={uvi} />
          <Map uvi={uvi} lat={currentCoord.lat} lng={currentCoord.lng} />
          <div className="w-screen h-screen bg-white"></div>
        </div>
      ) : (
        <div className="w-full h-screen p-10 flex items-center justify-center">
          <Loader />
        </div>
      )}
      <TabBar />
    </>
  );
}
