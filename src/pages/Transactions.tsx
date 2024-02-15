import React from "react";
import { PageLayout } from "@/components/PageLayout";
import styled from "styled-components";

const Transactions = () => {
  return (
    <PageLayout>
      <Card>
        <Content>transactions</Content>
      </Card>
    </PageLayout>
  );
};

export default Transactions;

const Card = styled.div`
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
