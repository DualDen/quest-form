import React, { FC } from "react";
import { Button, Form } from "antd";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router";

interface INextBtnProps {
  handleNext: Function | undefined;
  currentPage: string;
}

const NextFormButton: FC<INextBtnProps> = ({
  handleNext,
  currentPage,
}) => {
  const form = Form.useFormInstance();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authSlice);
  const errorsCheck = () => {
    let errors:string[] = [];
    form.getFieldsError().forEach(item => {
      if(item.errors.length != 0) {
        errors = [...errors,...item.errors]
      }
    });
    if (Object.values(form.getFieldsValue()).indexOf(undefined) != -1 || errors.length)
      return;
    else if (handleNext) {
      handleNext();
    }
  };
  const buttonCheck = () => {
    if (currentPage === "3") {
      if(!isAuth) {
      return (
        <Button htmlType="submit" onClick={errorsCheck}>
          Оформить заказ
        </Button>
      );
      }
      else{
      return (
          <Button htmlType="submit" onClick={() => navigate("/order")}>
            Оформить заказ
          </Button>
      );
      }
    } else {
      return (
        <Button htmlType="submit" onClick={errorsCheck}>
          Далее
        </Button>
      );
    }
  };
  return <div className="order-next-btn">{buttonCheck()}</div>;
};

export default NextFormButton;
