import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WalletOutlined,
  ClockCircleOutlined,
  VerticalAlignMiddleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import logo_large from "@/assets/logo_large.svg";
import styled from "styled-components";
import logo_small from "@/assets/logo_small.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Divider } from "antd";

const { Header, Sider, Footer, Content } = Layout;

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [selectedMenu, setSelectedMenu] = useState("Dashboard"); // Add this line

  const menuItems = [
    // Define your menu items
    {
      key: "1",
      icon: <ClockCircleOutlined />,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <VerticalAlignMiddleOutlined />,
      label: "Transactions",
    },
    {
      key: "3",
      icon: <WalletOutlined />,
      label: "Budget",
    },
  ];

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
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={({ key }) =>
            setSelectedMenu(
              menuItems.find((item) => item.key === key)?.label || "",
            )
          } // Update selectedMenu when a menu item is selected
        >
          {/* {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {/* <Link to={{ pathname: `/${item.label.toLowerCase()}` }}> */}
          {/* {item.label} */}
          {/* </Link> */}
          {/* </Menu.Item> */}

          <Menu.Item key="1" icon={<ClockCircleOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VerticalAlignMiddleOutlined />}>
            <Link to="/transactions">Transactions</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<WalletOutlined />}>
            <Link to="/budget">Budget</Link>
          </Menu.Item>
        </Menu>
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
          {selectedMenu}
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
  );
};

const LogoWrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
