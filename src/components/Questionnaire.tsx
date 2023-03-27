import React, { useState } from "react";
import { Input, Form, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { login } from "../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setOrder } from "../store/reducers/OrderSlice";
import { useRegisterMutation } from "../api/RegisterApi";
import Auth from "./Auth";
import QuestForm from "./QuestForm";
import {
  firstQuestItems,
  secondQuestItems,
  thirdQuestItems,
} from "../utils/constants";
import { IAboutHintsForm, IOrder, QuestValues } from "../models/types";
import { Register } from "./Register";

const Questionnaire = () => {
  const [questTab, setQuestTab] = useState("1");
  const [aboutHintsForm, setAboutHintsForm] = useState<IAboutHintsForm[]>([]);
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const { isAuth, isAuthLoading } = useAppSelector((state) => state.authSlice);
  const { order } = useAppSelector((state) => state.orderSlice);
  const onFinish = (values: any): void => {
    values.hasOwnProperty("date")
      ? dispatch(
          setOrder({ ...values, date: values.date.format("DD.MM.YYYY") })
        )
      : dispatch(setOrder(values));
  };
  console.log(order);
  const auth = async (values: any) => {
    await dispatch(login({ email: values.email, password: values.password }));
  };
  const registration = async (values: any) => {
    await register(values);
  };
  const handlePrev = (): void => {
    setQuestTab((Number(questTab) - 1).toString());
  };
  const handleNext = (): void => {
    setQuestTab((Number(questTab) + 1).toString());
  };

  const isAuthCheck = () => {
    return !isAuth ? (
      <>
      <TabPane tab="tab4" key="4">
            <Auth
              auth={auth}
              isAuthLoading={isAuthLoading}
            />
            </TabPane>
          <TabPane tab="tab5" key="5">
            <Register registration={registration}/>
          </TabPane>
          </>
    ) : null;
  };

  return (
    <div className="container">
      <Tabs activeKey={questTab}>
          
              <TabPane tab="tab1" key="1">
                <QuestForm
                currentPage={questTab}
                  name="first-quest"
                  onFinish={onFinish}
                  formItems={firstQuestItems}
                  handleNext={handleNext}
                />
              </TabPane>
              <TabPane tab="tab2" key="2">
                <QuestForm
                currentPage={questTab}
                  name="second-quest"
                  onFinish={onFinish}
                  formItems={secondQuestItems}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              </TabPane>
              <TabPane tab="tab3" key="3">
                <QuestForm
                currentPage={questTab}
                  name="third-quest"
                  onFinish={onFinish}
                  formItems={thirdQuestItems}
                  aboutHintsForm={aboutHintsForm}
                  setAboutHintsForm={setAboutHintsForm}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
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
              {isAuthCheck()}
      </Tabs>
    </div>
  );
};

export default Questionnaire;
