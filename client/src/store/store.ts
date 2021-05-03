import { configureStore } from '@reduxjs/toolkit';
import { LayoutState } from '../types/layout/layout.types';
import { DashboardState } from '../types/dashboard/dashboard.types';

import dashboardSlice from './dashboard/slice';
import layoutSlice from './layout/slice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    layout: layoutSlice,
  },
});

export interface ApplicationState {
  dashboard: DashboardState;
  layout: LayoutState;
}
