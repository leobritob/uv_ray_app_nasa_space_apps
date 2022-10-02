import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/';

export const OpenWeatherApi = axios.create({ baseURL });
