import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NotSpecificTransaction } from "@/shared/domain/types/shared";
import { MOCKED_TRANSACTIONS } from "@/mocks/transactions";

const initialState = {
  transactions: MOCKED_TRANSACTIONS,
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    getTransaction: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.transactions = MOCKED_TRANSACTIONS;
    },
    addTransaction: (state, action: PayloadAction<NotSpecificTransaction>) => {
      // console.log("action.payload", action.payload);
      state.transactions.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTransaction, getTransaction } = transactionSlice.actions;

export const TransactionReducer = transactionSlice.reducer;
