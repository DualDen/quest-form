import React, { useState } from "react";
import { Input, Form, Button, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setOrder } from "../store/reducers/OrderSlice";
import { useRegisterMutation } from "../api/RegisterApi";
import SecondQuestPage from "./SecondQuestPage";
import ThirdQuestPage from "./ThirdQuestPage";
import Auth from "./Auth";
import QuestForm from "./QuestForm";
import {
  firstQuestItems,
  secondQuestItems,
  thirdQuestItems,
} from "../utils/constants";
import { IAboutHintsForm } from "../models/types";

const Questionnaire = () => {
  const [firstTab, setFirstTab] = useState("1");
  const [secondTab, setSecondTab] = useState("1");
  const [authTab, setAuthTab] = useState("1");
  const [aboutHintsForm, setAboutHintsForm] = useState<IAboutHintsForm[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const { isAuth, isAuthLoading } = useAppSelector((state) => state.authSlice);
  const { order } = useAppSelector((state) => state.orderSlice);
  console.log(order);
  const onFinish = (values: any): any => {
    values.hasOwnProperty("date")
      ? dispatch(
          setOrder({ ...values, date: values.date.format("DD-MM-YYYY") })
        )
      : dispatch(setOrder(values));
  };
  const auth = async (values: any) => {
    await dispatch(login({ email: values.email, password: values.password }));
    navigate("/order");
  };
  const registration = async (values: any) => {
    await register(values);
  };
  const handlePrev = (): void => {
    setSecondTab((Number(secondTab) - 1).toString());
  };
  const handleNext = (): void => {
    setSecondTab((Number(secondTab) + 1).toString());
  };
  const handleToAuth = (): void => {
    setFirstTab("2");
  };
  const handleToForm = (): void => {
    setFirstTab("1");
  };

  const isAuthCheck = () => {
    return !isAuth ? (
      <TabPane tab="tab2" key="2">
        <Tabs activeKey="1">
          <TabPane tab="tab1" key="1">
            <Auth
              auth={auth}
              handleToForm={handleToForm}
              isAuthLoading={isAuthLoading}
            />
          </TabPane>
          <TabPane tab="tab2" key="2">
            <div className="container">
              <Form
                name="normal_register"
                className="login-form"
                onFinish={registration}
              >
                <Form.Item
                  name="firstName"
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
                  name="lastName"
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Зарегистрироваться
                  </Button>
                  <Button onClick={handleToForm}>Назад</Button>
                </Form.Item>
              </Form>
            </div>
          </TabPane>
        </Tabs>
      </TabPane>
    ) : null;
  };

  return (
    <div>
      <Tabs activeKey={firstTab}>
        {isAuthCheck()}
        <TabPane tab="tab1" key="1">
          <div className="container">
            <Tabs activeKey={secondTab}>
              <TabPane tab="tab1" key="1">
                <QuestForm
                  name="first-quest"
                  onFinish={onFinish}
                  formItems={firstQuestItems}
                  handleNext={handleNext}
                />
              </TabPane>
              <TabPane tab="tab2" key="2">
                <QuestForm
                  name="second-quest"
                  onFinish={onFinish}
                  formItems={secondQuestItems}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </TabPane>
              <TabPane tab="tab3" key="3">
                <QuestForm
                  name="third-quest"
                  onFinish={onFinish}
                  formItems={thirdQuestItems}
                  aboutHintsForm={aboutHintsForm}
                  setAboutHintsForm={setAboutHintsForm}
                  handlePrev={handlePrev}
                >
                  {aboutHintsForm.map((form) => {
                    return (
                      <Form.Item
                        key={form.name}
                        name={form.name}
                        label={form.label}
                        rules={[{ required: true }]}
                      >
                        <Input.TextArea />
                      </Form.Item>
                    );
                  })}
                  {aboutHintsForm.length > 0 && (
                    <Form.Item
                      name="something_else"
                      label="Может получится вспомнить что-нибудь еще?"
                    >
                      <Input.TextArea />
                    </Form.Item>
                  )}
                </QuestForm>
              </TabPane>
            </Tabs>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Questionnaire;
