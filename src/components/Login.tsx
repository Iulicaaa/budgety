import { Button, Checkbox, Form, Input } from "antd";
import city_street from "@/assets/city_street.png";
import logo_large from "@/assets/logo_large.svg";
import styled from "styled-components";
import {
  LogIn,
  CreateTransactions,
  TransactionList,
  Register,
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

const onFinish = async (values: any) => {
  console.log("Username: ", values.username);
  console.log("Password: ", values.password);
  await LogIn(values.username, values.password);
  CreateTransactions();
  TransactionList();
  UpdateTransactionId();
  DeleteTransaction();
  Register(values.username, values.password, values.fullName);
  CreateCategory();
  functieDeRequest();
  CategoryList();
  UpdateCategoryId();
  DeleteCategory();
  createBudget();
  BudgetList();
  UpdateBudgets();
  DeleteBudgets();
};

const Login: React.FC = () => {
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
