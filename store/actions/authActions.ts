import { loginService } from '@/service/userService';
import { store } from '../store';
import { setIsAuthenticated, setToken } from '../slices/authSlice';
import { getItem, removeItem } from '@/utils/storage';
import { storageKeys } from '@/utils/enums';

export const loginAction = async (username: string, password: string) => {
  const dispatch = store.dispatch;

  try {
    const response = await loginService(username, password);
    dispatch(setToken(response.jwt));
    dispatch(setIsAuthenticated(true));
    return response;
  } catch (error) {
    throw error;
  }
};

export const loadTokenAction = () => {
  const dispatch = store.dispatch;
  const token = getItem(storageKeys.Token);
  if (token) {
    dispatch(setToken(token));
    dispatch(setIsAuthenticated(true));
    return true;
  }
  return false;
};

export const logoutAction = () => {
  const dispatch = store.dispatch;
  removeItem(storageKeys.Token);
  dispatch(setToken(null));
  dispatch(setIsAuthenticated(false));
};
