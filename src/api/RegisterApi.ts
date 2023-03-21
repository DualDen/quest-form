import { createApi , fetchBaseQuery, } from "@reduxjs/toolkit/query/react";
import {IUserData} from "../models/types";




export const registerApi = createApi({
    reducerPath: "register/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "./users.json",
    }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        register: build.mutation<any, IUserData>({
            query: (userData) => ({
                url: "",
                method: "POST",
                body: userData,
            }),
        }),
    }),
});

export const {useRegisterMutation} = registerApi;