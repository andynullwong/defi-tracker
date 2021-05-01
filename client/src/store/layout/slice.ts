import { createSlice } from "@reduxjs/toolkit";
import { ApplicationState } from "../store";
import { LayoutState, MenuType } from "../../types/layout/layout.types";

const initialState: LayoutState = {
  collapsed: false,
  menu: MenuType.Dashboard,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setCollapsed, setMenu } = layoutSlice.actions;

export const selectCollapsed = (state: ApplicationState) =>
  state.layout.collapsed;
export const selectMenu = (state: ApplicationState) => state.layout.menu;

export default layoutSlice.reducer;
