import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrder} from "../../models/types";



const initialState: IOrder = {
    order: {} as IOrder,
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state:IOrder,action:PayloadAction<IOrder>) => {
            state.order = {...state.order,...action.payload};
        }
    }
});

export default orderSlice.reducer;
export const {setOrder} = orderSlice.actions;
