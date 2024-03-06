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
  // await LogIn(values.username, values.password);
  // await Register(values.username, values.password, values.fullName);
  CreateTransactions();
  TransactionList();
  UpdateTransactionId();
  DeleteTransaction();
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

const Register: React.FC = () => {
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
        <Form.Item
          name="FullName"
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
          Already have an account? <a href="#">Sign in here!</a>
        </Form.Item>
      </StyledForm>

      <Image src={city_street} />
    </Layout>
  );
};

export default Register;
