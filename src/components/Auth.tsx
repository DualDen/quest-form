import React, {FC, MouseEventHandler} from 'react';
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

interface IAuthProps {
    auth: Function,
    handleToForm: MouseEventHandler,
    isAuthLoading: boolean,
}

const Auth:FC<IAuthProps> = ({auth,handleToForm,isAuthLoading}) => {
    return (
        <div className="container">
            <Form name="normal_login" className="login-form" onFinish={(values) => auth(values)}>
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Please input your Username!" },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: "Please input your Password!" },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">
                        Забыли пароль?
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={isAuthLoading}
                    >
                        Войти
                    </Button>
                    Или <a href="">Зарегистрируйтесь</a>
                    <Button onClick={handleToForm}>Назад</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Auth;