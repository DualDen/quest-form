import React, {FC, MouseEventHandler} from 'react';
import {Button, Form} from "antd";

interface INextBtnProps {
    handleNext: Function | undefined,
    namesArr: string[],
}

const NextFormButton:FC<INextBtnProps> = ({handleNext,namesArr}) => {
    const form = Form.useFormInstance();
    const errorsCheck = () => {
        if(Object.values(form.getFieldsValue(namesArr)).indexOf(undefined) != -1) return
            else if(handleNext) {
                handleNext()
            }
    }
    return (
        <Button htmlType="submit" onClick={errorsCheck}>
            Далее
        </Button>
    );
};

export default NextFormButton;