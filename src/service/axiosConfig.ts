import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-site.amhp.com.br/api',
});
