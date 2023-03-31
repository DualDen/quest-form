import { CheckboxValueType } from "antd/es/checkbox/Group";
import {IQuestion} from "../models/types";


export const aboutHintsCheck = (
  values: CheckboxValueType[],
  state: IQuestion[] | undefined,
  setState: Function | undefined,
  options: any
) => {
  const docListener = (e: any) => {
    if (state !== undefined && setState !== undefined) {
      if (e.target.className !== "ant-checkbox-input") return;
      const { value } = e.target;
      if (value === "1" && values.includes(1)) {
        setState([...state, ...options[0].questions]);
      } else if (value === "1" && !values.includes(1)) {
        const filteredHints = state.filter((item) => !options[0].questions.includes(item));
        setState(filteredHints);
      }
      if (value === "2" && values.includes(2)) {
        setState([...state, ...options[1].questions]);
      } else if (value === "2" && !values.includes(2)) {
        const filteredHints = state.filter((item) => !options["1"].questions.includes(item));
        setState(filteredHints);
      }
      if (value === "3" && values.includes(3)) {
        setState([...state, ...options[2].questions]);
      } else if (value === "3" && !values.includes(3)) {
        const filteredHints = state.filter(
          (item) => !options[2].questions.includes(item)
        );
        setState(filteredHints);
      }
      if (value === "4" && values.includes(4)) {
        setState([...state, ...options[3].questions]);
      } else if (value === "4" && !values.includes(4)) {
        const filteredHints = state.filter((item) => !options[3].questions.includes(item));
        setState(filteredHints);
      }
      if (value === "5" && values.includes(5)) {
        setState([...state, ...options[4].questions]);
      } else if (value === "5" && !values.includes(5)) {
        const filteredHints = state.filter((item) => !options[4].questions.includes(item));
        setState(filteredHints);
      }
      if (value === "6" && values.includes(6)) {
        setState([...state, ...options[5].questions]);
      } else if (value === "6" && !values.includes(6)) {
        const filteredHints = state.filter((item) => !options[5].questions.includes(item));
        setState(filteredHints);
      }
      if (value === "7" && values.includes(7)) {
        setState([...state, ...options[6].questions]);
      } else if (
        value === "7" &&
        !values.includes(7)
      ) {
        const filteredHints = state.filter(
          (item) => !options[6].questions.includes(item)
        );
        setState(filteredHints);
      }
    }
  };
  document.addEventListener("click", docListener);
  setTimeout(() => {
    document.removeEventListener("click", docListener, false);
  }, 0);
};
