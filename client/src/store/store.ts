import { configureStore } from '@reduxjs/toolkit';
import { DashboardState } from '../types/dashboard/dashboard.types';
import { LayoutState } from '../types/layout/layout.types';
import { PoolState } from '../types/pools/pool.types';

import dashboardSlice from './dashboard/slice';
import layoutSlice from './layout/slice';
import poolSlice from './pools/slice';

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    dashboard: dashboardSlice,
    pool: poolSlice
  },
});

export interface ApplicationState {
  layout: LayoutState;
  dashboard: DashboardState;
  pool: PoolState;
}
