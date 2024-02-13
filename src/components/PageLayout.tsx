import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import logo_large from "@/assets/logo_large.svg";
import styled from "styled-components";
import logo_small from "@/assets/logo_small.svg";

const { Header, Sider, Content } = Layout;

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: colorBgContainer }}
      >
        <LogoWrapper>
          <img src={collapsed ? logo_small : logo_large} />
        </LogoWrapper>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            padding: 28,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

const LogoWrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
