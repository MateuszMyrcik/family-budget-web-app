import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "@/shared/domain/types/shared";
import { MOCKED_EXPENSES } from "@/mocks/expenses";

export interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: MOCKED_EXPENSES,
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
      state.expenses = MOCKED_EXPENSES;
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      // console.log("action.payload", action.payload);
      state.expenses.push(action.payload);
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
export const { getExpenses, addExpense } = expensesSlice.actions;

export const ExpensesReducer = expensesSlice.reducer;
