import React, {FC, useEffect, useState} from "react";
import { Input, Form, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setOrder } from "../store/reducers/OrderSlice";
import Auth from "./Auth";
import QuestForm from "./QuestForm";
import {
  firstQuestItems,
  productQuestItems,
  secondQuestItems,
  thirdQuestItems,
} from "../utils/constants";
import { IAboutHintsForm, IQuestion } from "../models/types";
import { Register } from "./Register";
import {
  getGenre,
  getProduct,
  getTheme,
} from "../store/reducers/ActionCreators";

const Questionnaire:FC = () => {
  const storageAboutHintsForm =
    JSON.parse(localStorage.getItem("aboutHintsForm")!) || [];
  const [questTab, setQuestTab] = useState("1");
  const [aboutHintsForm, setAboutHintsForm] = useState<IQuestion[]>(
    storageAboutHintsForm
  );
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authSlice);
  const { genreOptions, themeOptions, productOptions } = useAppSelector(
    (state) => state.questOptionsSlice
  );
  const { order } = useAppSelector((state) => state.orderSlice);
  useEffect(() => {
    dispatch(getGenre());
    dispatch(getTheme());
    dispatch(getProduct());
  }, []);
  const onFinish = (values: any, name: string): void => {
    const themeStringValues = Object.fromEntries(
      Object.entries(values).filter((item) => !Number(item[0]))
    );
    const themeNumberValues = Object.entries(
      Object.fromEntries(
        Object.entries(values).filter((item) => Number(item[0]))
      )
    ).map((item) => ({ id: item[0], value: item[1] }));
    if (values.deadline) {
      dispatch(
        setOrder({ ...values, deadline: values.deadline.format("DD.MM.YYYY") })
      );
    } else if (name === "third-quest") {
      dispatch(setOrder({ ...themeStringValues, themes: themeNumberValues }));
    } else {
      dispatch(setOrder(values));
    }
    localStorage.setItem(name, JSON.stringify(values));
    localStorage.setItem("aboutHintsForm", JSON.stringify(aboutHintsForm));
  };
  const handleNext = (): void => {
    setQuestTab((Number(questTab) + 1).toString());
  };

  const isAuthCheck = () => {
    return !isAuth ? (
      <>
        <TabPane tab="Регистрация" key="5">
          <Tabs className="auth-tabs">
            <TabPane tab="Авторизация" key="auth">
              <Auth />
            </TabPane>
            <TabPane tab="Регистрация" key="register">
              <Register />
            </TabPane>
          </Tabs>
        </TabPane>
      </>
    ) : null;
  };

  return (
    <div className="container">
      <div className="quest-main-title">Анкета</div>
      <div className="quest-container">
        <Tabs activeKey={questTab}>
          <TabPane tab="Шаг 1" key="1">
            <div className="quest-title">Создание песни по вашей истории</div>
            <div className="quest-desc">
              Ответьте на вопросы анкеты, это займет всего несколько минут. И
              можно считать, что Ваша песня уже почти готова ;)
            </div>
            <QuestForm
              currentPage={questTab}
              name="first-quest"
              onFinish={onFinish}
              formItems={firstQuestItems()}
              handleNext={handleNext}
            />
          </TabPane>
          <TabPane tab="Шаг 2" key="2">
            <div className="quest-title">Параметры Вашей песни</div>
            <div className="quest-desc">
              В этом разделе необходимо выбрать исполнителя, жанр, вокал,
              настроение и темп Вашей песни.
            </div>
            <QuestForm
              currentPage={questTab}
              name="second-quest"
              onFinish={onFinish}
              formItems={secondQuestItems(genreOptions)}
              handleNext={handleNext}
            />
          </TabPane>
          <TabPane tab="Шаг 3" key="3">
            <div className="quest-title">
              Какую историю расскажет Ваша песня?
            </div>
            <div className="quest-desc">
              В этом разделе предоставьте исполнителю все необходимое для
              вдохновения и создания песни.
            </div>
            <QuestForm
              currentPage={questTab}
              name="third-quest"
              onFinish={onFinish}
              formItems={thirdQuestItems(themeOptions)}
              aboutHintsForm={aboutHintsForm}
              setAboutHintsForm={setAboutHintsForm}
              handleNext={handleNext}
            >
              {aboutHintsForm.map((form) => {
                return (
                  <Form.Item
                    key={form.id}
                    name={form.id}
                    label={form.name}
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
          <TabPane tab="Услуги" key="4">
            <div className="quest-title">Услуги</div>
            <div className="quest-desc">
              В этом разделе предоставляется возможность выбрать услуги.
            </div>
            <div className="you-can-choose-products">Вы можете выбрать следующие услуги:</div>
            <QuestForm
              name="product-quest"
              onFinish={onFinish}
              formItems={productQuestItems(productOptions)}
              handleNext={handleNext}
              currentPage={questTab}
            />
          </TabPane>
          {isAuthCheck()}
        </Tabs>
      </div>
    </div>
  );
};

export default Questionnaire;
