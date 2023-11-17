import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MOCKED_BUDGET } from "@/mocks/budget";
import { Budget } from "@/shared/domain";

type UpdateBudgetState = {
  date: Date;
  budget: Budget | null;
  isEmpty: boolean;
};

const date = new Date();

const initialState: UpdateBudgetState = {
  date: date,
  isEmpty: true,
  budget: MOCKED_BUDGET[0],
};

export const updateBudgetSlice = createSlice({
  name: "update-budget",
  initialState,
  reducers: {
    dateChanged: (
      state,
      action: PayloadAction<{ date: Date; budgets: Budget[] }>
    ) => {
      state.date = action.payload.date;
      state.budget =
        action.payload.budgets.find((budget) => {
          return (
            budget.month === action.payload.date.getMonth() + 1 &&
            budget.year === action.payload.date.getFullYear()
          );
        }) ?? null;
      state.isEmpty = state.budget === null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dateChanged } = updateBudgetSlice.actions;

export const UpdateBudgetReducer = updateBudgetSlice.reducer;
