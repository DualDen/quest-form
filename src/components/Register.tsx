import React, { FC, useState } from "react";
import { Form, Input, Button } from "antd";
import { useRegisterMutation } from "../api/RegisterApi";
import { useAppDispatch } from "../hooks/hooks";
import { useNavigate } from "react-router";
import { auth } from "../store/reducers/AuthSlice";

export const Register: FC = () => {
  const [errors, setErrors] = useState<string | null>(null);
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const registration = async (values: any) => {
    delete values.confirm;
    await register(values).then((response) => {
      const { data, error }: any = response;
      if (error) {
        setErrors("Пользователь с данной почтой уже существует")
      }
      else {
          setErrors(null);
          dispatch(auth(data));
          navigate("/order");
      }
    });
  };
  return (
    <Form name="normal_register" className="login-form" onFinish={registration}>
      <Form.Item
        label="Имя"
        name="first_name"
        rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
      >
        <Input placeholder="Имя" />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="last_name"
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
