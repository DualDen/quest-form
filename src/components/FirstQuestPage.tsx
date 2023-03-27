import React, {FC, MouseEventHandler} from 'react';
import {Button, DatePicker, Form, Input} from "antd";
import {validateMessages} from "../utils/constants";

interface IFirstQuestPageProps {
    handleNext: MouseEventHandler,
    onFinish: Function,
}

const FirstQuestPage: FC<IFirstQuestPageProps> = ({handleNext,onFinish}) => {
    return (
        <Form onFinish={(values) => onFinish(values)} name="first-quest" validateMessages={validateMessages}>
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
                name="date"
                label="К какой дате необходима песня?"
            >
                <DatePicker
                    format="DD-MM-YYYY"
                    placeholder="Выберите дату"
                />
            </Form.Item>
            <Button onClick={handleNext} htmlType="submit">
                Далее
            </Button>
        </Form>
    );
};

export default FirstQuestPage;