import React, { FC } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Radio } from "antd";
import { IAboutHintsForm, IFormItem } from "../models/types";
import { maxCheckboxCheck } from "../utils/maxChecboxCheck";
import { validateMessages } from "../utils/constants";
import { aboutHintsCheck } from "../utils/aboutHintsCheck";
import { useForm } from "antd/es/form/Form";
import NextFormButton from "./NextFormButton";

interface IQuestFormProps {
  name: string;
  onFinish: Function;
  formItems: IFormItem[];
  children?: React.ReactNode;
  aboutHintsForm?: IAboutHintsForm[];
  setAboutHintsForm?: Function;
  handleNext?: Function;
  handlePrev?: Function;
}

const QuestForm: FC<IQuestFormProps> = ({
  name,
  onFinish,
  formItems,
  children,
  aboutHintsForm,
  setAboutHintsForm,
  handleNext,
  handlePrev,
}) => {
  const [form] = Form.useForm();
  const namesArr = formItems.map(item => item.name);
  return (
    <Form
      form={form}
      name={name}
      onFinish={(values) => {
        onFinish(values);
      }}
      validateMessages={validateMessages}
    >
      {formItems.map((item) => {
        switch (item.type) {
          case "checkbox":
            return (
              <Form.Item
                rules={[{ required: item.required }]}
                key={item.name}
                name={item.name}
                label={item.label}
              >
                <Checkbox.Group
                  onChange={(values) => {
                    maxCheckboxCheck(values, item.options, 2);
                    if (item.name === "about_hints") {
                      aboutHintsCheck(
                        values,
                        aboutHintsForm,
                        setAboutHintsForm
                      );
                      console.log(10);
                    }
                  }}
                  options={item.options}
                />
              </Form.Item>
            );
          case "radio":
            return (
              <Form.Item
                name={item.name}
                label={item.label}
                key={item.name}
                rules={[{ required: item.required }]}
              >
                <Radio.Group options={item.options} />
              </Form.Item>
            );
          case "input":
            return (
              <Form.Item
                name={item.name}
                label={item.label}
                key={item.name}
                rules={[{ required: item.required }]}
              >
                <Input />
              </Form.Item>
            );
          case "textarea":
            return (
              <Form.Item
                name={item.name}
                label={item.label}
                key={item.name}
                rules={[{ required: item.required }]}
              >
                <Input.TextArea />
              </Form.Item>
            );
          case "datepicker":
            return (
              <Form.Item
                rules={[
                  { required: true },
                  {
                    validator(rule, value) {
                      return new Promise((resolve, reject) => {
                        if (
                          value?.format("DD.MM.YYYY") <
                          new Date().toLocaleDateString()
                        ) {
                          reject("Нельзя выбрать прошедшую дату!");
                        } else {
                          resolve(value);
                        }
                      });
                    },
                  },
                ]}
                name={item.name}
                key={item.name}
                label={item.label}
              >
                <DatePicker placeholder={item.placeholder} />
              </Form.Item>
            );
        }
      })}
      {children}
      <NextFormButton handleNext={handleNext} namesArr={namesArr}/>
    </Form>
  );
};

export default QuestForm;
