import { createSlice } from '@reduxjs/toolkit';
import { ApplicationState } from '../store';
import { DashboardState } from '../../types/dashboard/dashboard.types';

const initialState: DashboardState = {
  walletBalance: 0,
  depositBalance: 0,
  yieldBalance: 0,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetAllBalances: (state) => initialState,
    setWalletBalance: (state, action) => {
      state.walletBalance = action.payload;
    },
    addDepositBalance: (state, action) => {
      state.depositBalance += action.payload;
    },
    addYieldBalance: (state, action) => {
      state.yieldBalance += action.payload;
    },
  },
});

export const {
  setWalletBalance,
  resetAllBalances,
  addDepositBalance,
  addYieldBalance,
} = dashboardSlice.actions;

export const selectWalletBalance = (state: ApplicationState) =>
  state.dashboard.walletBalance;

export const selectDepositBalance = (state: ApplicationState) =>
  state.dashboard.depositBalance;

export const selectYieldBalance = (state: ApplicationState) =>
  state.dashboard.yieldBalance;

export default dashboardSlice.reducer;
