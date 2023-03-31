import React, { FC } from "react";
import { Checkbox, DatePicker, Form, Input, Radio } from "antd";
import { IFormItem, IQuestion } from "../models/types";
import { validateMessages } from "../utils/constants";
import NextFormButton from "./NextFormButton";
import { initialValues } from "../utils/formInitialValues";
import { useAppDispatch } from "../hooks/hooks";
import { maxAsyncCheckbox } from "../store/reducers/QuestOptionsSlice";
import { aboutHintsCheck } from "../utils/aboutHintsCheck";
import dayjs from "dayjs";

interface IQuestFormProps {
  name: string;
  onFinish: Function;
  formItems: IFormItem[];
  children?: React.ReactNode;
  aboutHintsForm?: IQuestion[];
  setAboutHintsForm?: Function;
  handleNext: Function;
  currentPage: string;
}

const QuestForm: FC<IQuestFormProps> = ({
  name,
  onFinish,
  formItems,
  children,
  aboutHintsForm,
  setAboutHintsForm,
  handleNext,
  currentPage,
}) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  return (
    <Form
      initialValues={initialValues(name)}
      form={form}
      name={name}
      onFinish={(values) => {
        onFinish(values, name);
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
                    switch (item.name) {
                      case "genre":
                        dispatch(
                          maxAsyncCheckbox({
                            values: values,
                            options: item.options,
                            maxLength: 2,
                            name: "genreOptions",
                          })
                        );
                        break;
                      case "theme":
                        aboutHintsCheck(
                          values,
                          aboutHintsForm,
                          setAboutHintsForm,
                          item.options
                        );
                        dispatch(
                          maxAsyncCheckbox({
                            values: values,
                            options: item.options,
                            maxLength: 2,
                            name: "themeOptions",
                          })
                        );
                        break;
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
                      if(value < dayjs(new Date())) {
                          reject("Нельзя выбрать прошедшую дату!");
                        }
                      else if (value < dayjs(new Date()).clone().add(2, "days")) {
                          reject("Дедлайн не может быть меньше двух дней!");
                        }
                        else {
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
          default:
            return <></>
        }
      })}
      {children}
      <NextFormButton
        currentPage={currentPage}
        handleNext={handleNext}
      />
    </Form>
  );
};

export default QuestForm;
