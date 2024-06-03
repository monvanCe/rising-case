import { storageKeys } from '@/utils/enums';
import { setItem } from '@/utils/storage';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      setItem(storageKeys.Token, action.payload);
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setToken, setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
