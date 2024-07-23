import { configureStore } from "@reduxjs/toolkit";
import { foodsReducer } from "./slices/foodsSlice";
import { accountReducer } from "./slices/accountSlice";

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
