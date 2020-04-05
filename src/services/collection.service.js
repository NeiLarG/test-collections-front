import axios from 'axios';
import config from './config';

export function getAllCollections() {
  return axios.get(`${config.hostUrl}/collection/all`);
}

export function deleteCollection(idCollection) {
  const user = JSON.parse(localStorage.getItem('user'));
  return axios({
    method: 'DELETE',
    url: `${config.hostUrl}/collection`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { idCollection },
  });
}
