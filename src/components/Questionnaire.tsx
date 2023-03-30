import React, { useEffect, useState } from "react";
import { Input, Form, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setOrder } from "../store/reducers/OrderSlice";
import Auth from "./Auth";
import QuestForm from "./QuestForm";
import {
  firstQuestItems,
  secondQuestItems,
  thirdQuestItems,
} from "../utils/constants";
import { IAboutHintsForm, IQuestion } from "../models/types";
import { Register } from "./Register";
import { getGenre, getTheme } from "../store/reducers/ActionCreators";

const Questionnaire = () => {
  const storageAboutHintsForm =
    JSON.parse(localStorage.getItem("aboutHintsForm")!) || [];
  const [questTab, setQuestTab] = useState("1");
  const [aboutHintsForm, setAboutHintsForm] = useState<IQuestion[]>(
    storageAboutHintsForm
  );
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authSlice);
  const { genreOptions, themeOptions } = useAppSelector(
    (state) => state.questOptionsSlice
  );
  useEffect(() => {
    dispatch(getGenre());
    dispatch(getTheme());
  }, []);
  const onFinish = (values: any, name: string): void => {
    const themeStringValues = Object.fromEntries(
      Object.entries(values).filter((item) => !Number(item[0]))
    );
    const themeNumberValues = Object.entries(
      Object.fromEntries(
        Object.entries(values).filter((item) => Number(item[0]))
      )
    ).map((item) => ({id: item[0],value: item[1]}));
    if(values.date) {
      dispatch(
          setOrder({ ...values, date: values.date.format("DD.MM.YYYY") })
      )
    }
     else if(name === "third-quest") {
       dispatch(setOrder({...themeStringValues,themes: themeNumberValues}));
    }
     else{
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
        <TabPane tab="Регистрация" key="4">
          <Tabs>
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
      <h3>Анкета</h3>
      <div className="quest-title">Создание песни по вашей истории</div>
      <div className="quest-desc">
        Ответьте на вопросы анкеты, это займет всего несколько минут. И можно
        считать, что Ваша песня уже почти готова ;)
      </div>
      <Tabs activeKey={questTab}>
        <TabPane tab="Анкета №1" key="1">
          <QuestForm
            currentPage={questTab}
            name="first-quest"
            onFinish={onFinish}
            formItems={firstQuestItems()}
            handleNext={handleNext}
          />
        </TabPane>
        <TabPane tab="Анкета №2" key="2">
          <QuestForm
            currentPage={questTab}
            name="second-quest"
            onFinish={onFinish}
            formItems={secondQuestItems(genreOptions)}
            handleNext={handleNext}
          />
        </TabPane>
        <TabPane tab="Анкета №3" key="3">
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
        {isAuthCheck()}
      </Tabs>
    </div>
  );
};

export default Questionnaire;
