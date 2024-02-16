import React from "react";
import { PageLayout } from "@/components/PageLayout";
import styled from "styled-components";

//to do
//folosim props cu titlu in fiecare pagina(pages) pentru a schimba titlul paginii
//punem props in loc de {selectedMenu}

const Dashboard = () => {
  return (
    <PageLayout>
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

export default Dashboard;

const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
