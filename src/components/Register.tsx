import { Button, Checkbox, Form, Input } from "antd";
import city_street from "@/assets/city_street.png";
import logo_large from "@/assets/logo_large.svg";
import styled from "styled-components";
import {
  functieDeRequest,
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
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

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

const StyledForm = styled(Form<FieldType>)`
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

type FieldType = {
  username: string;
  password: string;
  fullName: string;
  terms: boolean;
};

const Register = () => {
  const { register } = useAuth();

  const onFinish = async (values: any) => {
    console.log("Username: ", values.username);
    console.log("Password: ", values.password);
    // await LogIn(values.username, values.password);
    await register(values.username, values.password, values.fullName);
  };

  return (
    <Layout>
      <StyledForm name="register" onFinish={onFinish} scrollToFirstError>
        <LogoWrapper>
          <img src={logo_large} />
        </LogoWrapper>
        <h1>Create an account</h1>
        <p>
          Please sign up to your personal account if you want to use all our
          premium products
        </p>
        <Form.Item<FieldType>
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
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

        <Form.Item<FieldType>
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

        <Form.Item<FieldType>
          name="terms"
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
          <Checkbox>
            I agree with <a href="">terms and conditions</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item>
          Already have an account? <Link to="/Login">Sign in here!</Link>
        </Form.Item>
      </StyledForm>

      <Image src={city_street} />
    </Layout>
  );
};

export default Register;
