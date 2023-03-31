import React, { FC } from "react";
import { Form, Input, Button } from "antd";
import { useRegisterMutation } from "../api/RegisterApi";

export const Register: FC = () => {
  const [register] = useRegisterMutation();
  const registration = async (values: any) => {
    delete values.confirm;
    console.log(values);
    await register(values);
  };
  return (
    <Form name="normal_register" className="login-form" onFinish={registration}>
      <Form.Item
        label="Имя"
        name="firstName"
        rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
      >
        <Input placeholder="Имя" />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={[{ required: true, message: "Пожалуйста, введите фамилию" }]}
      >
        <Input placeholder="Фамилия" />
      </Form.Item>
      <Form.Item
        label="Электронная почта"
        name="email"
        rules={[
          { required: true, message: "Пожалуйста, введите почту" },
          { type: "email", message: "Некорректная электронная почта" },
        ]}
      >
        <Input placeholder="Электронная почта" />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>
      <Form.Item
        label="Подтверждение пароль"
        name="confirm"
        rules={[
          { required: true, message: "Пожалуйста, подтвердите пароль" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли не совпадают!"));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Подтверждение пароль" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};
