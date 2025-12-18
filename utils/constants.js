import Config from 'react-native-config';

const API_KEY = Config.OPEN_WEATHER_API_KEY;

export const FETCH_WEATHER =
  'https://api.openweathermap.org/data/2.5/weather?q=';
export const FETCH_WEATHER_PARAMS = '&units=metric&appid=' + API_KEY;
