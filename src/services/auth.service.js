import axios from 'axios';
import config from './config';

export function register(user) {
  return axios.post(`${config.hostUrl}/auth/registration`, user);
}