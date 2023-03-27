import React, {FC, MouseEventHandler} from 'react';
import {Button, Form} from "antd";

interface INextBtnProps {
    handleNext: Function,
    namesArr: string[],
}

const NextFormButton:FC<INextBtnProps> = ({handleNext,namesArr}) => {
    const form = Form.useFormInstance();
    return (
        <Button htmlType="submit" onClick={() => {

            handleNext();
        }}>
            Далее
        </Button>
    );
};

export default NextFormButton;