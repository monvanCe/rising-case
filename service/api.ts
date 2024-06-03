import axiosInstance from './config';

export const getRequest = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const postRequest = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export default {
  getRequest,
  postRequest,
};
