import { Button, Checkbox, Form, Input } from "antd";
import city_street from "@/assets/city_street.png";
import logo_large from "@/assets/logo_large.svg";
import styled from "styled-components";
import axios from "axios";

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

const onFinish = (values: any) => {
  console.log("Username: ", values.username);
  console.log("Password: ", values.password);
  LogIn(values.username, values.password);
  CreateTransactions(values.token);
  // TransactionList(values.token);
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiam9obmRvZSJ9LCJpYXQiOjE2MzIwNzYwMzcsImV4cCI6MTYzMjA3NjA5N30.3Z";

const LogIn = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "https://budgety-api-node.onrender.com/auth/login",
      {
        username: "johndoe",
        password: "123456",
      },
    );

    // const token = response.data.token;

    // console.log("Token: ", token);
  } catch (error) {
    console.error("Error: ", error);
  }
};

const CreateTransactions = async (token: string) => {
  try {
    const response = await axios.post(
      "https://budgety-api-node.onrender.com/transactions/",
      {
        service: "korean",
        amount: "200",
        paymentDate: "2009-11-13T10:39:35Z",
        category: "mancare",
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

// const TransactionList = async (token: string) => {
//   try {
//     const response = await axios.get(
//       "https://budgety-api-node.onrender.com/transactions/",
//       { headers: { Authorization: `Bearer ${token}` } },
//     );
//     console.log(response);
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// };

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
              type: "email",
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
