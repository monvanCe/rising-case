import { loginEndpoint } from '@/const/endpoints';
import { postRequest } from './api';

export const loginService = async (username: string, password: string) => {
  try {
    const response: ILoginResponse = await postRequest(loginEndpoint, {
      username,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
