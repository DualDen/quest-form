import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserData } from "../models/types";

export const registerApi = createApi({
  reducerPath: "register/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://37.140.199.206/api",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    register: build.mutation<any, IUserData>({
      query: userData => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
