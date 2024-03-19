import { Button, Checkbox, Form, Input } from "antd";
import city_street from "@/assets/city_street.png";
import logo_large from "@/assets/logo_large.svg";
import styled from "styled-components";
import {
  login,
  CreateTransactions,
  TransactionList,
  UpdateTransactionId,
  DeleteTransaction,
  CreateCategory,
  CategoryList,
  UpdateCategoryId,
  DeleteCategory,
  createBudget,
  BudgetList,
  UpdateBudgets,
  DeleteBudgets,
} from "@/requests";
import { functieDeRequest } from "@/requests";
import { Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  gap: 20px;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
`;

//   CreateTransactions({
//     service: "bathbomb",
//     amount: 200,
//     paymentDate: "2009-11-13T10:39:35Z",
//     categoryId: "65e861413b25e53a0a5a0a9e",
//   });
//   TransactionList();
//   UpdateTransactionId({
//     service: "bathbomb",
//     amount: 200,
//     paymentDate: "2009-11-13T10:39:35Z",
//     categoryId: "65e861413b25e53a0a5a0a9e",
//   });
//   DeleteTransaction({ _id: "65df7ab32f64263285be4aa3" });
//   // Register(values.username, values.password, values.fullName);
//   CreateCategory({ name: "placeri" });
//   // functieDeRequest();
//   CategoryList();
//   UpdateCategoryId({ name: "placeri", categoryId: "65df9822cf64b5a9ca80ccf7" });
//   DeleteCategory({ categoryId: "65df9822cf64b5a9ca80ccf7" });
//   createBudget({ categoryId: "65e861413b25e53a0a5a0a9e", amount: 57 });
//   BudgetList();
//   UpdateBudgets({ categoryId: "65df9822cf64b5a9ca80ccf7", amount: 4 });
//   DeleteBudgets({ categoryId: "65df9822cf64b5a9ca80ccf7" });

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("Username: ", values.username);
    console.log("Password: ", values.password);
    await login(values.username, values.password);
    navigate("/dashboard");
  };

  return (
    <Layout>
      <StyledForm name="login" onFinish={onFinish} scrollToFirstError>
        <LogoWrapper>
          <img src={logo_large} />
        </LogoWrapper>
        <h1>Sign In</h1>
        <p>
          Please sign in to your personal account if you want to use all our
          premium products
        </p>

        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              type: "string",
              message: "The input is not valid Username!",
            },
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>

        <Form.Item>
          Don't have an account? <a href="#">Sign up here!</a>
        </Form.Item>
      </StyledForm>

      <Image src={city_street} />
    </Layout>
  );
};

export default Login;
