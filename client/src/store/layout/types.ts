export enum MenuType {
  Dashboard = "dashboard",
  Payments = "payments",
  Settings = "settings",
}

export interface LayoutState {
  collapsed: boolean;
  menu: MenuType;
}

export enum LayoutActionType {
  SET_MENU = "@layout/SET_MENU",
  TOGGLE_COLLAPSE = "@@layout/TOGGLE_COLLAPSE",
}
