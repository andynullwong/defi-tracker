import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from './layout/slice';
import { LayoutState } from '../types/layout/layout.types';

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
  },
});

export interface ApplicationState {
  layout: LayoutState;
}
