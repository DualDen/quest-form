import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Types } from "../models/types";

export const storeApi = createApi({
  reducerPath: "store/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getStore: build.query<Types[], string>({
      query: () => ({
        url: "/albums/1/photos",
      }),
    }),
  }),
});

export const { useGetStoreQuery } = storeApi;
