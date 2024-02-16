import React from "react";
import { PageLayout } from "@/components/PageLayout";
import styled from "styled-components";
import { Divider } from "antd";
import {
  PlusCircleOutlined,
  QuestionCircleOutlined,
  StockOutlined,
} from "@ant-design/icons";
import man_on_office from "@/assets/man_on_office.svg";

//to do
//folosim props cu titlu in fiecare pagina(pages) pentru a schimba titlul paginii
//punem props in loc de {selectedMenu}

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard">
      <CardWrapper>
        <Card1>
          <Bar>
            <p>Latest Transactions</p>
            <PlusCircleOutlined />
          </Bar>
          <Divider
            style={{
              padding: 0,
              margin: 0,
            }}
          />
          <Content>
            <Image src={man_on_office} />
            <p>your transactions will apear here</p>
          </Content>
        </Card1>
        <RightSide>
          <Card2>
            <Bar>
              <p>Balane</p>
              <QuestionCircleOutlined />
            </Bar>
            <Divider
              style={{
                padding: 0,
                margin: 0,
              }}
            />
            <Content>Dashboard Balance</Content>
          </Card2>
          <Card3>
            <Content>card3</Content>
          </Card3>
          <Card4>
            <Content>
              <p>Expenses</p>
              <p>0.00</p>
              <p>Balance decreased</p>
            </Content>
            <StockOutlined />
          </Card4>
        </RightSide>
      </CardWrapper>
    </PageLayout>
  );
};

export default Dashboard;

const Image = styled.img`
  width: 70%;
  height: auto;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
  height: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60%;
  background-color: white;
  border-radius: 8px;
`;

const Card3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: white;
`;

const Card4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: white;
  overflow: auto;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 610px;
  padding-top: 42px;
`;
