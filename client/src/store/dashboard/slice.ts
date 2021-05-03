import { createSlice } from '@reduxjs/toolkit';
import { ApplicationState } from '../store';
import { DashboardState } from '../../types/dashboard/dashboard.types';

const initialState: DashboardState = {
  walletBalance: 0,
  depositBalance: 0,
  yieldBalance: 0,
  vaults: {},
  lpVaults: {},
  staking: {},
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetWalletBalance: (state) => {
      state.walletBalance = 0;
      state.depositBalance = 0;
      state.yieldBalance = 0;
    },
    setWalletBalance: (state, action) => {
      state.walletBalance = action.payload;
    },
    addWalletBalance: (state, action) => {
      const { deposit, yield: yieldBalance } = action.payload;
      state.depositBalance += deposit;
      state.yieldBalance += yieldBalance;
    },
  },
});

export const {
  addWalletBalance,
  setWalletBalance,
  resetWalletBalance,
} = dashboardSlice.actions;

export const selectWalletBalance = (state: ApplicationState) =>
  state.dashboard.walletBalance;

export const selectDepositBalance = (state: ApplicationState) =>
  state.dashboard.depositBalance;

export const selectYieldBalance = (state: ApplicationState) =>
  state.dashboard.yieldBalance;

export default dashboardSlice.reducer;
