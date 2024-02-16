import React from "react";
import { PageLayout } from "@/components/PageLayout";
import styled from "styled-components";
import { Divider } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const Budget = () => {
  return (
    <PageLayout>
      <Card>
        <Bar>
          <SettingsDiv>
            <CalendarOutlined />
            <p>Settings</p>
          </SettingsDiv>

          <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </Bar>
        <Divider
          style={{
            padding: 0,
            margin: 0,
          }}
        />
        <Content>Budget</Content>
      </Card>
    </PageLayout>
  );
};

export default Budget;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  max-width: 610px;
  padding-top: 42px;
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  height: 64px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-bottom: 0;
  padding-bottom: 0;
  button {
    background-color: #f5f5f5;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
`;

const SettingsDiv = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
