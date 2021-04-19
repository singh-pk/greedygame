import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.npoint.io',
});

export const getAppListsApi = () => instance.get('/4ca5aaf459a573940672');

export const getAppStatsApi = () => instance.get(`/d734975d2aee62d197ef`);
