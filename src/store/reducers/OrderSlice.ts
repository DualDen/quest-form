import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder, IOrderFields, QuestValues } from "../../models/types";

const initialState: IOrder = {
  order: {} as IOrderFields,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state: IOrder, action: PayloadAction<QuestValues | {[k:string]:unknown}>) => {
      state.order = { ...state.order, ...action.payload };
    },
  },
});

export default orderSlice.reducer;
export const { setOrder } = orderSlice.actions;
