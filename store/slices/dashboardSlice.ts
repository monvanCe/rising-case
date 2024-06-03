import { dataType } from '@/utils/enums';
import { createSlice } from '@reduxjs/toolkit';

interface info {
  dailyUsage: number;
  expireTime: string;
  lastCharge: string;
  lastChargeAmount: string;
  totalDataUsage: number;
}

interface table {
  date: string;
  ipcount: number;
  location: string;
  purpose: string;
  rental: string;
  type: dataType;
}

interface DashboardState {
  info: info;
  table: table[];
}

const initialState: DashboardState = {
  info: {
    dailyUsage: 0,
    expireTime: '',
    lastCharge: '',
    lastChargeAmount: '',
    totalDataUsage: 0,
  },
  table: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setInfo(state, action) {
      state.info = action.payload;
    },
    setTable(state, action) {
      state.table = action.payload;
    },
  },
});

export const { setInfo, setTable } = dashboardSlice.actions;

export default dashboardSlice.reducer;
