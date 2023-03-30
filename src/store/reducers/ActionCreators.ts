import { createAsyncThunk } from "@reduxjs/toolkit";
import {IGenreOption, IUser} from "../../models/types";
import axios from "axios";

const BASE_URL = "http://37.140.199.206/api"

export const login = createAsyncThunk<IUser, IUser, { rejectValue: string }>(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>("./users.json");
      const user = response.data?.find(
        (user) => user.password === password && user.email === email
      );
      if (user) {
        return user as IUser;
      } else {
        throw new Error("Ошибка при получении данные");
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue("Error");
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