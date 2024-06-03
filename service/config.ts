import { tokenInterceptor } from '@/middleware/tokenInterceptor';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://recruitment-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  console.log('config', config);
  return config;
});

tokenInterceptor(instance);

export default instance;
