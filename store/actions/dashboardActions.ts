import { getInfoService, getTableService } from '@/service/dashboardService';
import { store } from '../store';
import { setInfo, setTable } from '../slices/dashboardSlice';

export const getTableAction = async () => {
  const dispatch = store.dispatch;

  try {
    const response = await getTableService();
    dispatch(setTable(response.data));
    return response;
  } catch (error) {
    throw error;
  }
};

export const getInfoAction = async () => {
  const dispatch = store.dispatch;

  try {
    const response = await getInfoService();
    dispatch(setInfo(response));
    return response;
  } catch (error) {
    throw error;
  }
};

export const loadDashboardDataAction = async () => {
  try {
    getTableAction();
    getInfoAction();
  } catch (error) {
    throw error;
  }
};
