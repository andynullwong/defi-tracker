import { createSlice } from "@reduxjs/toolkit";
import { ApplicationState } from "../store";
import { LayoutState, MenuType } from "./types";

const initialState: LayoutState = {
  collapsed: false,
  menu: MenuType.Dashboard,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenu } = layoutSlice.actions;

export const selectCollapsed = (state: ApplicationState) =>
  state.layout.collapsed;
export const selectMenu = (state: ApplicationState) => state.layout.menu;

export default layoutSlice.reducer;
