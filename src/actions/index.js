import axios from 'axios'

const API_KEY = '67feaf00ee2f2e9e83bd98ca761ff127';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${API_URL}&q=${city}`;
	const req = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload : req,
	};
}
