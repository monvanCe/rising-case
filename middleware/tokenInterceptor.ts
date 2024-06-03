import { storageKeys } from '@/utils/enums';
import { getItem } from '@/utils/storage';
import { AxiosRequestConfig } from 'axios';

export const tokenInterceptor = (axiosInstance: any) => {
  axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getItem(storageKeys.Token);

    if (token) {
      config.headers!.Authorization = token;
    }

    return config;
  });
};
