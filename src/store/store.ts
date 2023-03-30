import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { storeApi } from "../api/StoreApi";
import authSlice from "./reducers/AuthSlice";
import orderSlice from "./reducers/OrderSlice";
import { registerApi } from "../api/RegisterApi";
import questOptionsSlice from "./reducers/QuestOptionsSlice";

const rootReducer = combineReducers({
  [storeApi.reducerPath]: storeApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  authSlice,
  orderSlice,
  questOptionsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(storeApi.middleware,registerApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
