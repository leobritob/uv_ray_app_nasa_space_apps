import { IOneCallResponse } from '../interfaces';
import { OpenWeatherApi } from '../providers';

const appid = import.meta.env.VITE_OPENWEATHER_API_KEY;

function oneCall(lat: string | number, lon: string | number) {
  return OpenWeatherApi.get<IOneCallResponse>('data/3.0/onecall', {
    params: { lat, lon, appid },
  });
}

export const OpenWeatherService = {
  oneCall,
};
