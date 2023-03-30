import React, { FC } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {useRegisterMutation} from "../api/RegisterApi";



export const Register: FC = () => {
    const [register] = useRegisterMutation();
    const registration = async (values: any) => {
        await register(values);
    };
  return (
    <Form name="normal_register" className="login-form" onFinish={registration}>
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
      >
        <Input placeholder="Имя" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Пожалуйста, введите фамилию" }]}
      >
        <Input placeholder="Фамилия" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Пожалуйста, введите почту" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Электронная почта"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};
