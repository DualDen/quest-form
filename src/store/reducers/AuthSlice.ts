import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthData, IUser } from "../../models/types";
import { login } from "./ActionCreators";

interface IAuthState {
  isAuth: boolean | string;
  user: IUser;
  isAuthLoading: boolean;
  authError: string | null;
  token: string;
}
const initialState: IAuthState = {
  isAuth: JSON.parse(localStorage.getItem("auth")!) || false,
  user: {} as IUser,
  isAuthLoading: false,
  authError: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<IAuthData>) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuth = true;
      localStorage.setItem("auth", "true");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state: IAuthState, action: PayloadAction<IAuthData>) => {
        const { token, user } = action.payload;
        state.user = user;
        state.token = token;
        state.isAuth = true;
        localStorage.setItem("auth", "true");
        state.isAuthLoading = false;
      }
    );
    builder.addCase(
      login.rejected,
      (state: IAuthState, action: PayloadAction<any>) => {
        state.authError = action.payload;
        state.isAuthLoading = false;
      }
    );
  },
});

export default authSlice.reducer;
export const { auth } = authSlice.actions;
