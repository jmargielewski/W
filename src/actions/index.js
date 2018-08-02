import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, FEATCH_WEATHER } from './types';

export const signin = (formProps, staticUser, callback) => (dispatch) => {
  if (formProps && staticUser && formProps.email === staticUser.email
    && formProps.password === staticUser.password) {
    localStorage.setItem('isLoggin', true);
    dispatch({ type: AUTH_USER, payload: true });
    callback();
  } else {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('isLoggin');
  return {
    type: AUTH_USER,
    payload: false,
  };
};

// use your api key in order to fetch data
const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=Krakow&units=metric&APPID=${API_KEY}`;

export const fetchWeatherData = () => (dispatch) => {
  const request = axios.get(ROOT_URL);
  dispatch({ type: FEATCH_WEATHER, payload: request });
};
