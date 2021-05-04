import { createSlice } from '@reduxjs/toolkit';
import { VaultType } from '../../types/api-calls/yieldwatch.types';
import { PoolState } from '../../types/pools/pool.types';
import { ApplicationState } from '../store';

const initialState: PoolState = {
  vaults: [],
  lpVaults: [],
  staking: [],
  barnOfTrust: [],
};

export const poolSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    appendPool: (state, action) => {
      const { payload } = action;
      switch (payload.type) {
        case VaultType.vault:
          state.vaults.push(payload);
          break;
        case VaultType.lpVault:
          state.lpVaults.push(payload);
          break;
        case VaultType.staking:
          state.staking.push(payload);
          break;
        default:
          console.log('Unsupported Vault detected:', payload);
          break;
      }
    },
  },
});

export const { appendPool } = poolSlice.actions;

export const selectPoolVaults = (state: ApplicationState) => state.pool.vaults;
export const selectPoolLPVaults = (state: ApplicationState) =>
  state.pool.lpVaults;
export const selectPoolStakingVaults = (state: ApplicationState) =>
  state.pool.staking;
export const selectBarnVaults = (state: ApplicationState) =>
  state.pool.barnOfTrust;

export default poolSlice.reducer;
