import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { useModel, history } from 'umi';
import { login } from '@/services/login';

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const { setInitialState } = useModel('@@initialState');

  const onFinish = (values: any) => {
    const user = {
      name: 'woow_wu7',
      token: 'Bearer ADF',
    };

    login(values)
      .then((res) => {
        setInitialState(user);
        window.localStorage.setItem('user', JSON.stringify(user));
        history.push('/a-hooks/useUpdate');
      })
      .catch((err) => console.log(`err`, err));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="small"
        style={{
          width: '500px',
          height: '400px',
          display: 'block',
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
