import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import ASideMenu from '@/components/Menu/AsideMenu';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>
      <Layout>
       <Sider>
        <ASideMenu></ASideMenu>
       </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
