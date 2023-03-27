import React, {FC, MouseEventHandler, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {aboutHintsOptions, detailOptions, validateMessages} from "../utils/constants";
import {aboutHintsCheck} from "../utils/aboutHintsCheck";
import {maxCheckboxCheck} from "../utils/maxChecboxCheck";
import {useAppSelector} from "../hooks/hooks";
import {IAboutHintsForm} from "../models/types";

interface IThirdQuestPageProps {
    handlePrev: MouseEventHandler,
    handleToAuth: MouseEventHandler,
    onFinish: Function,
}

const ThirdQuestPage:FC<IThirdQuestPageProps> = ({handlePrev,handleToAuth,onFinish}) => {
    const [aboutHintsForm, setAboutHintsForm] = useState<IAboutHintsForm[]>([]);
    const { isAuth } = useAppSelector((state) => state.authSlice);
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
    return (
        <Form onFinish={(values) => onFinish(values)} name="third-quest" validateMessages={validateMessages}>
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
                <Checkbox.Group
                    options={aboutHintsOptions}
                    onChange={(values) => {
                        aboutHintsCheck(
                            values,
                            aboutHintsForm,
                            setAboutHintsForm
                        );
                        maxCheckboxCheck(values, aboutHintsOptions, 2);
                    }}
                />
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
            <Form.Item
                label="Может получится вспомнить что-нибудь еще?"
                name="something_else"
            >
                <Input.TextArea />
            </Form.Item>
            {detailOptions.map((form) => {
                return (
                    <div key={form.detailLabel}>
                        <Form.Item
                            rules={[{ required: true }]}
                            label={form.detailLabel}
                            name={form.detailMainName}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: true }]}
                            label="Поясните, почему она важна?"
                            name={form.detailDescriptionName}
                        >
                            <Input.TextArea />
                        </Form.Item>
                    </div>
                );
            })}
            <Button onClick={handlePrev}>Назад</Button>
            {isAuthButtonCheck()}
        </Form>
    );
};

export default ThirdQuestPage;