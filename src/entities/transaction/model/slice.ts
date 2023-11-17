import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  NotSpecificTransaction,
  TransactionCategory,
  TransactionDetails,
} from "@/shared/domain/types/shared";
import { MOCKED_TRANSACTIONS } from "@/mocks/transactions";
import { MOCKED_TRANSACTION_CATEGORIES } from "@/mocks/transactionCategories";

const initialState = {
  transactions: MOCKED_TRANSACTIONS,
  categories: MOCKED_TRANSACTION_CATEGORIES,
  loading: "idle",
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
    addCategory: (state, action: PayloadAction<TransactionDetails>) => {
      const id = String(state.categories.length + 1); // TODO: replace with id from backend
      state.categories.push({ ...action.payload, id });
    },
    removeCategory: (
      state,
      action: PayloadAction<TransactionCategory["id"]>
    ) => {
      // console.log("action.payload", action.payload);
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTransaction, getTransaction, addCategory, removeCategory } =
  transactionSlice.actions;

export const TransactionReducer = transactionSlice.reducer;
