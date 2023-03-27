import React, {FC, MouseEventHandler} from 'react';
import {Button, Form} from "antd";
import { useAppSelector } from '../hooks/hooks';
import { useNavigate } from 'react-router';

interface INextBtnProps {
    handleNext: Function | undefined,
    namesArr: string[],
    currentPage: string,
}

const NextFormButton:FC<INextBtnProps> = ({handleNext,namesArr,currentPage}) => {
    const form = Form.useFormInstance();
    const navigate = useNavigate();
    const {isAuth} = useAppSelector(state => state.authSlice);
    const errorsCheck = () => {
        if(Object.values(form.getFieldsValue(namesArr)).indexOf(undefined) != -1) return
            else if(handleNext) {
                handleNext()
            }
    }
    const buttonCheck = () => {
        if(!isAuth && currentPage === "3") {
            return <Button htmlType="submit" onClick={errorsCheck}>
            Оформить заказ
        </Button>
        }
        else if(currentPage === "3") {
            return <Button htmlType='submit' onClick={() => navigate('/order')}>Оформить заказ</Button>
        }
        else {
        return <Button htmlType="submit" onClick={errorsCheck}>
            Далее
        </Button>
        }
    }
    return (
        <>
        {buttonCheck()}
        </>
    );
};

export default NextFormButton;