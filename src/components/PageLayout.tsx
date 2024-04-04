import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WalletOutlined,
  ClockCircleOutlined,
  VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Flex } from "antd";
import logo_large from "@/assets/logo_large.svg";
import styled from "styled-components";
import logo_small from "@/assets/logo_small.svg";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { createGlobalStyle } from "styled-components";
import { useAuth } from "@/contexts/AuthContext";

const { Header, Sider, Footer, Content } = Layout;

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  selectedKey: "dashboard" | "transactions" | "budget";
};

export const PageLayout = ({
  children,
  title,
  selectedKey,
}: PageLayoutProps) => {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <GlobalStyle />
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
          <Menu mode="inline" selectedKeys={[selectedKey]}>
            <Menu.Item key="dashboard" icon={<ClockCircleOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item
              key="transactions"
              icon={<VerticalAlignMiddleOutlined />}
            >
              <Link to="/transactions">Transactions</Link>
            </Menu.Item>
            <Menu.Item key="budget" icon={<WalletOutlined />}>
              <Link to="/budget">Budget</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Flex justify="space-between" style={{ paddingRight: 20 }}>
              <div>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
                {title}
              </div>
              <div>
                {" "}
                {user?.username}
                <button style={{ marginLeft: "10px" }} onClick={logout}>
                  Sign out
                </button>
              </div>
            </Flex>
          </Header>
          <Content
            style={{
              padding: 28,
              color: "magenta",
            }}
          >
            {children}
          </Content>
          <Divider
            style={{
              padding: 0,
              margin: 0,
            }}
          />

          <Footer
            style={{
              textAlign: "left",
            }}
          >
            ©{new Date().getFullYear()} All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

const LogoWrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  .ant-menu-item-selected {
    
    border-right: 3px solid orange !important;
    border-radius: 0 !important;
    color: orange !important;
  
    .anticon {
      color: orange !important;
    }
  }
`;
