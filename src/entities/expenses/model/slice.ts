import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExpensesState {
  expenses: string[];
}

const initialState: ExpensesState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    getExpenses: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.expenses = ["Amoniak", "Owoce", "Warzywa"];
    },
    // updateExpense: (state) => {
    //   state.expenses = [''];
    // },
    // deleteExpenses: (state, action: PayloadAction<number>) => {
    //   state.expenses += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { getExpenses } = expensesSlice.actions;

export const ExpensesReducer = expensesSlice.reducer;
