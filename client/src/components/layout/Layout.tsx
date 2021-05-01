import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCollapsed,
  selectMenu,
  setCollapsed,
} from '../../store/layout/slice';
import SideNav from './SideNav';
import { MenuType } from '../../store/layout/types';
import Dashboard from '../dashboard';
import Payments from '../payments';
import Settings from '../settings/settings';
import './Layout.css';

const { Header, Sider, Content } = Layout;

const App = () => {
  const collapsed = useSelector(selectCollapsed);
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();

  const content = (selectedMenu: MenuType): JSX.Element => {
    switch (selectedMenu) {
      case MenuType.Dashboard:
        return <Dashboard />;
      case MenuType.Payments:
        return <Payments />;
      case MenuType.Settings:
        return <Settings />;
      default:
        return <></>;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>{`🦝 ${!collapsed ? 'Defi Portal' : ''}`}</div>
        <SideNav />
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => dispatch(setCollapsed(!collapsed)),
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {content(menu)}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
