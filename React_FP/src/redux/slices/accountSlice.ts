import { AccountAction } from "./../../types/redux";
import { AccountType } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";

const accontState = {
  name: "",
  surname: "",
  gmail: "",
  password: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: accontState,
  reducers: {
    changeAccount: {
      reducer(state: AccountType, action: AccountAction) {
        state.name = action.payload.name;
        state.surname = action.payload.surname;
        state.gmail = action.payload.gmail;
        state.password = action.payload.password;
      },
      prepare(account: AccountType) {
        return {
          payload: account,
        };
      },
    },
  },
});

export const { changeAccount } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
