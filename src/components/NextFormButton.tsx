import React, {FC} from "react";
import { Button, Form } from "antd";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router";

interface INextBtnProps {
  handleNext: Function;
  currentPage: string;
}

const NextFormButton: FC<INextBtnProps> = ({
  handleNext,
  currentPage,
}) => {
  const form = Form.useFormInstance();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authSlice);
  const next = () => {handleNext()};
  const errorsCheck = () => {
    let errors:string[] = [];
    form.getFieldsError().forEach(item => {
      if(item.errors.length !== 0) {
        errors = [...errors,...item.errors]
      }
    });
    if (Object.values(form.getFieldsValue()).indexOf(undefined) !== -1 || errors.length)
      return;
    else {
      handleNext()
    }
  };
  const buttonCheck = () => {
    if (currentPage === "4") {
      if(!isAuth) {
      return (
        <Button htmlType="submit" onClick={next}>
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
          Продолжить
        </Button>
      );
    }
  };
  return <div className="order-next-btn">{buttonCheck()}</div>;
};

export default NextFormButton;
