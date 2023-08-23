import { EMPTY_MOCKED_BUDGET } from "./../../../mocks/budget";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MOCKED_BUDGET } from "@/mocks/budget";

export type UpdateBudgetEntity = {
  budgetId: string;
  category: string;
  plannedTotal: number;
};

const initialState = {
  budgets: MOCKED_BUDGET,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addNewBudget: (state, action: PayloadAction<Date>) => {
      const month = action.payload.getMonth() + 1;
      const year = action.payload.getFullYear();
      state.budgets.push({
        ...EMPTY_MOCKED_BUDGET,
        month,
        year,
      });
    },
    getBudgets: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.budgets = MOCKED_BUDGET;
    },
    getBudget: (state, action: PayloadAction<Date>) => {
      const month = action.payload.getMonth() + 1;
      const year = action.payload.getFullYear();
      state.budgets = state.budgets.filter((budget) => {
        return budget.month === month && budget.year === year;
      });
    },
    updateBudgetEntity: (
      state,
      {
        payload: { category, budgetId, plannedTotal },
      }: PayloadAction<UpdateBudgetEntity>
    ) => {
      state.budgets = state.budgets.map((budget) => {
        if (budget.id === budgetId) {
          const categoryRecords = budget.categoryRecords.map(
            (categoryRecord) => {
              if (categoryRecord.category === category) {
                return { ...categoryRecord, plannedTotal };
              }
              return categoryRecord;
            }
          );
          return { ...budget, categoryRecords };
        }
        return budget;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { getBudget, getBudgets, updateBudgetEntity, addNewBudget } =
  budgetSlice.actions;

export const BudgetReducer = budgetSlice.reducer;
