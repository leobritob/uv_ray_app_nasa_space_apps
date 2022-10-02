import { UVHelper } from '../../helpers';
import { MapCaption } from './MapCaption';

type MapStatusProps = {
  lat: number;
  lng: number;
  uvi: number;
};

export function MapStatus({ lat, lng, uvi }: MapStatusProps) {
  const backgroundColor = UVHelper.getCaptionColor(uvi);
  return (
    <div className="fixed z-50 left-1/2 -translate-x-1/2 bottom-44 lg:translate-x-0 lg:left-10 lg:bottom-10">
      <div className="w-[200px] text-gray-500 bg-white/80 p-4 rounded-md shadow-2xl  flex flex-col gap-2 items-start justify-center">
        <div className="px-1 w-full flex items-center justify-between">
          <p>Lat:</p>
          <p>{lat}</p>
        </div>
        <div className="px-1 w-full flex items-center justify-between">
          <p>Lng:</p>
          <p>{lng}</p>
        </div>
        <div
          className="px-1 w-full rounded-sm"
          style={{ backgroundColor, border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="text-white w-full flex items-center justify-between">
            <p>UV:</p>
            <p>{uvi}</p>
          </div>
        </div>
        <MapCaption />
      </div>
    </div>
  );
}
