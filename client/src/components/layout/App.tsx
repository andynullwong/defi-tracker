import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menu, setMenu] = useState(["dashboard"]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">🦝 Defi Portal</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={menu}>
          <Menu.Item
            key="dashboard"
            icon={<DashboardOutlined onClick={() => setMenu(["dashboard"])} />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="payments"
            icon={
              <DollarCircleOutlined onClick={() => setMenu(["payments"])} />
            }
          >
            Payments
          </Menu.Item>
          <Menu.Item
            key="settings"
            icon={<SettingOutlined onClick={() => setMenu(["settings"])} />}
          >
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
