import React, { FC } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../store/reducers/ActionCreators";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const Auth: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthLoading, authError } = useAppSelector(
    (state) => state.authSlice
  );
  const auth = async (values: any) => {
    await dispatch(
      login({ email: values.email, password: values.password })
    ).then(
      (response) =>
        response.meta.requestStatus === "fulfilled" && navigate("/order")
    );
  };
  return (
    <Form name="normal_login" className="login-form" onFinish={auth}>
      <Form.Item
        label="Электронная почта"
        name="email"
        rules={[
          { required: true, message: "Пожалуйста, введите электронную почту" },
          { type: "email", message: "Некорректная электронная почта" },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Электронная почта"
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      {authError && <div className="auth-error">{authError}</div>}

      <Form.Item>
        <Button
          loading={isAuthLoading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Auth;
