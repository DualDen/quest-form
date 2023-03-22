import React, {ReactNode, useState} from "react";
import { Input, Form, Button, Tabs, DatePicker, Checkbox, Radio } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import {IAboutHintsForm, ICBOption} from "../models/types";
import { maxCheckboxCheck } from "../utils/maxChecboxCheck";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setOrder } from "../store/reducers/OrderSlice";
import { useRegisterMutation } from "../api/RegisterApi";
import {CheckboxValueType} from "antd/es/checkbox/Group";


const QuestForm = () => {
  const [firstTab, setFirstTab] = useState("1");
  const [secondTab, setSecondTab] = useState("1");
  const [aboutHintsForm,setAboutHintsForm] = useState<IAboutHintsForm[]>([]);
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
  const aboutHintsCheck = (values: CheckboxValueType[]) => {
    if (values.includes("story")) {
      setAboutHintsForm([...aboutHintsForm,...story]);
    }
    else {
    }
    if (values.includes("memories")) {
      const memories = [
        {label: "Какие моменты сразу вспоминаете, думая об этом человеке?", name:"memories_think_about"},
        {label: "Какие моменты были бы не такими яркими друг без друга?", name:"memories_without"},
        {label: "Какие жизненные этапы вы прошли вместе?", name:"life_stages"},
      ]
      setAboutHintsForm([...aboutHintsForm,...memories])
    }
  };
  const story = [
    {label: "Как вы познакомились?", name:"how_meet"},
    {label: "Через какие трудности вы прошли вместе?", name:"what_hardships"},
    {label: "Какие у вас совместные планы на будущее?", name:"plans"},
  ]
  const genreOptions: ICBOption[] = [
    {
      label:
        "Сонграйтер (просто фортепиано или гитара, фокус на повествовании)",
      value: "songwriter",
    },
    {
      label:
        "Рэп/Хип-Хоп (ритмичный вокал, свежее звучание и перкуссионный бит)",
      value: "rap",
    },
    {
      label: "R&B (проникновенный вокал, грув и крутая атмосфера)",
      value: "r&b",
    },
    {
      label: "Рок (энергичное электрическое звучание для любителей оторваться)",
      value: "rock",
    },
    {
      label:
        "Акустический поп (более широкий инструментарий, акцент на мелодии)",
      value: "acoustic_pop",
    },
  ];
  const moodOptions: ICBOption[] = [
    {
      label: "Душевной (подчеркнёт эмоциональные моменты, истории и чувства)",
      value: "soulful",
    },
    {
      label: "Романтической (близкие и личные моменты, медленный темп)",
      value: "romantic",
    },
    {
      label: "Смешной (подчеркнёт комические моменты из вашей жизни)",
      value: "funny",
    },
    {
      label: "Воодушевляющей (слова ободрения и вдохновения для Ваших близких)",
      value: "inspiring",
    },
    {
      label: "Счастливой (весёлые и позитивные моменты, вызовет улыбку)",
      value: "happy",
    },
    { label: "Беззаботной (весёлая и спокойная)", value: "carefree" },
    {
      label: "Серьёзной (эмоциональный и серьёзный тон, более медленный темп)",
      value: "serious",
    },
  ];
  const aboutHintsOptions: ICBOption[] = [
    { label: "История Ваших отношений", value: "story" },
    { label: "Любимые совместные воспоминания", value: "memories" },
    { label: "Что эти отношения значат для Вас", value: "what_means" },
    { label: "Любимые совместные занятия", value: "hobbies" },
    { label: "Как эти отношения сформировали Вас", value: "how_shape" },
    { label: "Совместные шутки и смешные истории", value: "jokes" },
    { label: "Другие истории и воспоминания", value: "other_stories" },
  ];
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
                    rules={[{ required: true }]}
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
                  <Form.Item name="about_hints" label="О чем Вы хотите рассказать? Выберите две подсказки">
                    <Checkbox.Group options={aboutHintsOptions} onChange={(values) => {
                      maxCheckboxCheck(values, aboutHintsOptions, 2);
                      aboutHintsCheck(values);
                    }}/>
                  </Form.Item>
                  {aboutHintsForm.map((form) => {
                   return <Form.Item key={form.name} name={form.name} label={form.label} rules={[{required: true}]}>
                      <Input.TextArea/>
                    </Form.Item>
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
