import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Budget, BudgetRecord } from "@/shared/domain";

type UpdateBudgetState = {
  date: Date;
  currentRecords: BudgetRecord[];
  isEmpty: boolean;
};

const date = new Date();

const initialState: UpdateBudgetState = {
  date: date,
  isEmpty: true,
  currentRecords: [],
};

export const updateBudgetSlice = createSlice({
  name: "update-budget",
  initialState,
  reducers: {
    dateChanged: (state, action: PayloadAction<{ date: Date }>) => {
      state.date = action.payload.date;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dateChanged } = updateBudgetSlice.actions;

export const UpdateBudgetReducer = updateBudgetSlice.reducer;
