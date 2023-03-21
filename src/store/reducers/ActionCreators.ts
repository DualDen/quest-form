import {createAsyncThunk} from "@reduxjs/toolkit";
import { IUser } from "../../models/types";
import axios from "axios"



export const login = createAsyncThunk<IUser,IUser,{rejectValue: string}>("auth/login", async ({email,password},thunkAPI) => {
    try{
        const response = await axios.get<IUser[]>("./users.json");
        const user = response.data.find(user => user.password === password && user.email === email) ;
        if(user) {
            return user as IUser;
        }
        else {
            throw new Error("Ошибка при получении данные")
        }
    }
    catch (e:any) {
        return thunkAPI.rejectWithValue("Error")
    }
})