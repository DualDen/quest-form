import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuthData,
  IGenreOption,
  IProductOption,
  IThemeOption,
} from "../../models/types";
import axios from "axios";

const BASE_URL = "http://37.140.199.206/api";

export const login = createAsyncThunk<
  IAuthData,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post<IAuthData>(`${BASE_URL}/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue("Неправильная почта или пароль");
  }
});
export const getGenre = createAsyncThunk<
  IGenreOption[],
  void,
  { rejectValue: string }
>("questOptions/getGenre", async (_, thunkAPI) => {
  try {
    const response = await axios.get<IGenreOption[]>(`${BASE_URL}/genre`);
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue("Ошибка во время загрузки жанров");
  }
});
export const getTheme = createAsyncThunk<
  IThemeOption[],
  void,
  { rejectValue: string }
>("questOptions/getTheme", async (_, thunkAPI) => {
  try {
    const response = await axios.get<IThemeOption[]>(`${BASE_URL}/theme`);
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue("Ошибка во время загрузки тем");
  }
});
export const getProduct = createAsyncThunk<
  IProductOption[],
  void,
  { rejectValue: string }
>("questOptions/getProduct", async (_, thunkAPI) => {
  try {
    const response = await axios.get<IProductOption[]>(`${BASE_URL}/product`);
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue("Ошибка во время загрузки услуг");
  }
});
