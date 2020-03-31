import axios from 'axios';
import config from './config';

export function register(user) {
  return axios.post(`${config.hostUrl}/auth/registration`, user);
}

export async function login(user) {
  const result = await axios.post(`${config.hostUrl}/auth/login`, user);
  localStorage.setItem('user', JSON.stringify(result));
  return result;
}