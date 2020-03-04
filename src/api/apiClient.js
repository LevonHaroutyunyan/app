import axios from 'axios';

import { YELP_API_KEY } from './constants';

const apiClient = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/',
  headers: {
    'Authorization': `Bearer ${YELP_API_KEY}`
  }
});

export default apiClient;
