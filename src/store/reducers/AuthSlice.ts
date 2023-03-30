import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/types";
import { login } from "./ActionCreators";

interface IAuthState {
  isAuth: boolean | string;
  user: IUser;
  isAuthLoading: boolean;
  authError: string | null;
}
const initialState: IAuthState = {
  isAuth: JSON.parse(localStorage.getItem("auth")!) || false,
  user: {} as IUser,
  isAuthLoading: false,
  authError: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state: IAuthState, action: PayloadAction<IUser>) => {
        state.user = action.payload;
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
