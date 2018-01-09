import axios from 'axios';

const API_KEY = '1e04f6423ee9dfaaea58f6adeb6c4fec';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FEATCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},GB`;
  const request = axios.get(url);

  return {
    type: FEATCH_WEATHER,
    payload: request
  };
}