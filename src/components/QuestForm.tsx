import React, {useEffect, useState} from "react";
import { Input, Form, Button, Tabs, DatePicker, Checkbox, Radio } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { IAboutHintsForm } from "../models/types";
import { maxCheckboxCheck } from "../utils/maxChecboxCheck";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setOrder } from "../store/reducers/OrderSlice";
import { useRegisterMutation } from "../api/RegisterApi";
import {
  aboutHintsOptions, detailOptions,
  genreOptions,
  moodOptions
} from "../utils/constants";
import {aboutHintsCheck} from "../utils/aboutHintsCheck";

const QuestForm = () => {
  const [firstTab, setFirstTab] = useState("1");
  const [secondTab, setSecondTab] = useState("1");
  const [aboutHintsForm, setAboutHintsForm] = useState<IAboutHintsForm[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const { isAuth, isAuthLoading } = useAppSelector((state) => state.authSlice);
  const onFinish = (values: any): any => {
    const fieldsValues = {
      ...values,
      date: values.date.format("DD-MM-YYYY"),
    };
    dispatch(setOrder(fieldsValues));
    console.log(fieldsValues)
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
  const isAuthButtonCheck = () => {
    return !isAuth ? (
      <Button htmlType="submit" onClick={handleToAuth}>
        Оформить заказ
      </Button>
    ) : (
      <Button type="primary" htmlType="submit">
        Оформить заказ
      </Button>
    );
  };
  const isAuthCheck = () => {
    return !isAuth ? (
      <TabPane tab="tab2" key="2">
        <Tabs activeKey="1">
          <TabPane tab="tab1" key="1">
            <div className="container">
              <Form name="normal_login" className="login-form" onFinish={auth}>
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
  const validateMessages = {
    required: "Это обязательное поле!",
  };
  return (
    <div>
      <Tabs activeKey={firstTab}>
        {isAuthCheck()}
        <TabPane tab="tab1" key="1">
          <div className="container">
            <Form
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Tabs activeKey={secondTab}>
                <TabPane tab="tab1" key="1">
                  <Form.Item
                    name="name"
                    label="Как вас зовут?"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="recipient_name"
                    label="Как зовут получателя подарка?"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="who_has_to"
                    label="Кем вам приходится получатель?"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    rules={[{ required: true }]}
                    name="event"
                    label="На какое событие вы хотите подарить песню?"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    rules={[{ required: true },{validator(rule,value) {
                      return new Promise((resolve,reject) => {
                        if(value?.format("DD.MM.YYYY") < new Date().toLocaleDateString()) {
                          reject("Нельзя выбрать прошедшую дату!");
                        }
                        else {
                          resolve(value);
                        }
                      })
                      }}]}
                    name="date"
                    label="К какой дате необходима песня?"
                  >
                    <DatePicker
                      format="DD-MM-YYYY"
                      placeholder="Выберите дату"
                    />
                  </Form.Item>
                  <Button onClick={handleNext}>Далее</Button>
                </TabPane>
                <TabPane tab="tab2" key="2">
                  <Form.Item
                    name="artist"
                    label="Выбор артиста"
                    rules={[{ required: true }]}
                  >
                    <Radio.Group>
                      <Radio value="by_myself"> Выберу самостоятельно </Radio>
                      <Radio value="with_help"> Помогите мне выбрать </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="genre"
                    label="Какой жанр вы предпочитаете?"
                    rules={[{ required: true }]}
                  >
                    <Checkbox.Group options={genreOptions} />
                  </Form.Item>
                  <Form.Item
                    name="vocal"
                    label="Какой вокал вы бы хотели услышать в песне?"
                    rules={[{ required: true }]}
                  >
                    <Radio.Group>
                      <Radio value="female">Женский</Radio>
                      <Radio value="male">Мужской</Radio>
                      <Radio value="both">Два голоса</Radio>
                      <Radio value="any">Нет предпочтений</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="mood"
                    label="Какой по настроению должна получиться песня?"
                    rules={[{ required: true }]}
                  >
                    <Checkbox.Group
                      onChange={(values) => {
                        maxCheckboxCheck(values, moodOptions, 2);
                      }}
                      options={moodOptions}
                    />
                  </Form.Item>
                  <Form.Item
                    name="temp"
                    label="Выберите темп"
                    rules={[{ required: true }]}
                  >
                    <Radio.Group>
                      <Radio value="none">
                        Нет предпочтений (артист сам выберет лучший темп исходя
                        из Ваших ответов)
                      </Radio>
                      <Radio value="slow">
                        Медленный (ощущение близости, лиричность, подойдёт для
                        медленного танца)
                      </Radio>
                      <Radio value="middle">
                        Умеренный (ощущение сбалансированности, для большинства
                        песен)
                      </Radio>
                      <Radio value="fast">
                        Быстрый (энергичный, идеален для торжеств и гимнов)
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item>
                    <Button onClick={handlePrev}>Назад</Button>
                    <Button onClick={handleNext}>Далее</Button>
                  </Form.Item>
                </TabPane>
                <TabPane tab="tab3" key="3">
                  <Form.Item
                    name="about"
                    label="О ком эта песня? Подробно опишите получателя"
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea placeholder="Ваш ответ" />
                  </Form.Item>
                  <Form.Item
                    name="about_hints"
                    label="О чем Вы хотите рассказать? Выберите две подсказки"
                  >
                    <Checkbox.Group options={aboutHintsOptions} onChange={(values) => {
                      aboutHintsCheck(values,aboutHintsForm,setAboutHintsForm);
                      maxCheckboxCheck(values, aboutHintsOptions, 2);
                    }}/>
                  </Form.Item>
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
                  <Form.Item label="Может получится вспомнить что-нибудь еще?" name="something_else">
                    <Input.TextArea/>
                  </Form.Item>
                  {detailOptions.map((form) => {
                    return (
                        <>
                        <Form.Item rules={[{required: true}]} label={form.detailLabel} name={form.detailMainName}>
                          <Input/>
                        </Form.Item>
                        <Form.Item rules={[{required: true}]} label="Поясните, почему она важна?" name={form.detailDescriptionName}>
                          <Input.TextArea/>
                        </Form.Item>
                        </>
                    )
                  })}
                  <Button onClick={handlePrev}>Назад</Button>
                  {isAuthButtonCheck()}
                </TabPane>
              </Tabs>
            </Form>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default QuestForm;
