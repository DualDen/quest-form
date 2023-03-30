import { createAsyncThunk } from "@reduxjs/toolkit";
import {IAuthData, IGenreOption, IUser} from "../../models/types";
import axios from "axios";
import {useNavigate} from "react-router";

const BASE_URL = "http://37.140.199.206/api"

export const login = createAsyncThunk<IAuthData, {email:string,password:string}, { rejectValue: string }>(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
     const response = await axios.post<IAuthData>(`${BASE_URL}/login`,{email: email,password: password});
     return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue("Неправильная почта или пароль");
    }
  }
);
export const getGenre = createAsyncThunk<IGenreOption[],void,{rejectValue: string}>("questOptions/getGenre", async (_,thunkAPI) => {
    try{
        const response = await axios.get<IGenreOption[]>(`${BASE_URL}/genre`);
        return response.data;
    }
    catch (e:any) {
        return thunkAPI.rejectWithValue("Error while loading data");
    }
});
export const getTheme = createAsyncThunk('questOptions/getTheme', async (_,thunkAPI) => {
    try{
        const response = await axios.get(`${BASE_URL}/theme`);
        return response.data;
    }
    catch (e:any) {
        return thunkAPI.rejectWithValue("Error while loading data");
    }
})