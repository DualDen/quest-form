import { ICBOption } from "../models/types";
import { CheckboxValueType } from "antd/es/checkbox/Group";

export const maxCheckboxCheck = (
  values: CheckboxValueType[],
  options: ICBOption[],
  maxLength: number
) => {
  const length = values.length;
  if (length === maxLength) {
    options.map((item: ICBOption) => {
      item.disabled = !values.find(
        (val: CheckboxValueType) => val === item.value
      );
      return item;
    });
  } else {
    options.map((item: ICBOption) => {
      item.disabled = false;
      return item;
    });
  }
};
