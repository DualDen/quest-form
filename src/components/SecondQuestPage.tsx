import React, {FC, MouseEventHandler} from 'react';
import {Button, Checkbox, Form, Radio} from "antd";
import {genreOptions, moodOptions, validateMessages} from "../utils/constants";
import {maxCheckboxCheck} from "../utils/maxChecboxCheck";

interface ISecondQuestPageProps {
    handleNext: MouseEventHandler,
    handlePrev: MouseEventHandler,
    onFinish: Function,
}

const SecondQuestPage:FC<ISecondQuestPageProps> = ({handleNext,handlePrev,onFinish}) => {
    return (
        <Form onFinish={(values) => onFinish(values)} name="second-quest" validateMessages={validateMessages}>
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
            <div className="form-navigate-buttons">
                <Button onClick={handlePrev}>Назад</Button>
                <Button onClick={handleNext} htmlType="submit">Далее</Button>
            </div>
        </Form>
    );
};

export default SecondQuestPage;