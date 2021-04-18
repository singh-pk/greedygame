import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.npoint.io',
});

export const getAppListsApi = () => instance.get('/54d09df281f91e8c146f');

export const getAppStatsApi = () => instance.get(`/d734975d2aee62d197ef`);
