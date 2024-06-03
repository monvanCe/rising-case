import { getInfoEndpoint, getTableEndpoint } from '@/const/endpoints';
import { getRequest } from './api';

export const getTableService = async () => {
  try {
    const response = await getRequest(getTableEndpoint);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getInfoService = async () => {
  try {
    const response = await getRequest(getInfoEndpoint);
    return response;
  } catch (error) {
    throw error;
  }
};
