import { createSlice } from "@reduxjs/toolkit";

import { BudgetReducers, BudgetState } from "../types";
import { BudgetRecord } from "@/shared";
import { createBudget, getBudget, updateBudgetRecord } from "./services";

export type UpdateBudgetEntity = {
  budgetId: string;
  category: string;
  plannedTotal: number;
};

const initialState: BudgetState = {
  records: [],
  error: null,
  loading: "idle",
};

export const budgetSlice = createSlice<BudgetState, BudgetReducers, "budget">({
  name: "budget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBudget.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getBudget.fulfilled, (state, { payload }) => {
        state.loading = "loaded";
        if (!payload) {
          return;
        }
        state.records = payload;
      })
      .addCase(getBudget.rejected, (state, { error }) => {
        state.loading = "error";
        state.error = error.message as string;
      })
      .addCase(createBudget.fulfilled, (state, { payload }) => {
        state.loading = "loaded";
        state.records = payload;
      })
      .addCase(createBudget.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(createBudget.rejected, (state, { error }) => {
        state.loading = "error";
        state.error = error.message as string;
      })
      .addCase(updateBudgetRecord.fulfilled, (state, action) => {
        const payload = action.payload as unknown as BudgetRecord;
        state.loading = "loaded";
        state.records = state.records.map((record) => {
          if (record._id === payload._id) {
            return payload;
          }
          return record;
        });
      })
      .addCase(updateBudgetRecord.pending, (state) => {
        state.loading = "loading";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = budgetSlice.actions;

export const BudgetReducer = budgetSlice.reducer;
