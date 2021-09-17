import axios from 'axios';
export const HTTP = axios.create({
  baseURL: 'https://cpc.ais.co.th/',
});