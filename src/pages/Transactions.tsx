import React from "react";
import { PageLayout } from "@/components/PageLayout";
import styled from "styled-components";
import { Divider } from "antd";
import {
  SearchOutlined,
  PlusCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import man_with_phone from "@/assets/man_with_phone.svg";
import woman_on_laptop from "@/assets/woman_on_laptop.svg";
import Icon from "@ant-design/icons/lib/components/Icon";

const Transactions = () => {
  return (
    <PageLayout title="Transactions" selectedKey="transactions">
      <CardWrapper>
        <Card1>
          <Bar>
            <InputDiv>
              <SearchOutlined />
              <input placeholder="Type to search for transactions" />
            </InputDiv>
            <PlusCircleOutlined />
          </Bar>
          <Divider
            style={{
              padding: 0,
              margin: 0,
            }}
          />
          <Content>
            <Image src={man_with_phone} />
            <p>your transactions will apear here</p>
          </Content>
        </Card1>
        <Card2>
          <Bar>
            <p>Calendar</p>
            <IconDiv>
              <LeftCircleOutlined />
              <RightCircleOutlined />
            </IconDiv>
          </Bar>
          <Divider
            style={{
              padding: 0,
              margin: 0,
            }}
          />
          <Content>
            <Image src={woman_on_laptop} />
            <p>your monthly insights</p>
          </Content>
        </Card2>
      </CardWrapper>
    </PageLayout>
  );
};

export default Transactions;

const Image = styled.img`
  width: 70%;
  height: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 8px;
  gap: 20px;
`;

const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const IconDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 64px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-bottom: 0;
  padding-bottom: 0;
  input {
    background-color: #f5f5f5;
    border: none;
    font-size: 14px;
    font-weight: 500;
    width: 50%;
    color: #000;
  }
`;
