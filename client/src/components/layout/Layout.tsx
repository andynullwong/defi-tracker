import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./Layout.css";
import SideNav from "./SideNav";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">🦝 Defi Portal</div>
        <SideNav />
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
