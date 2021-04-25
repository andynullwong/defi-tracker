import React, { useState } from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  DollarCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

enum MenuTypes {
  Dashboard = "dashboard",
  Payments = "payments",
  Settings = "settings",
}

const SideNav = () => {
  const [menu, setMenu] = useState(MenuTypes.Dashboard);

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[menu]}>
      <Menu.Item
        key="dashboard"
        icon={
          <DashboardOutlined onClick={() => setMenu(MenuTypes.Dashboard)} />
        }
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        key="payments"
        icon={
          <DollarCircleOutlined onClick={() => setMenu(MenuTypes.Payments)} />
        }
      >
        Payments
      </Menu.Item>
      <Menu.Item
        key="settings"
        icon={<SettingOutlined onClick={() => setMenu(MenuTypes.Settings)} />}
      >
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default SideNav;
