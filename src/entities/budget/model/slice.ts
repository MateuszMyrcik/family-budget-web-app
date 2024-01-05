import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BudgetReducers, BudgetState } from "../types";
import {
  BudgetRecord,
  CreateBudgetResponse,
  GetBudgetDto,
  GetBudgetResponse,
  UpdateBudgetRecordDto,
  UpdateBudgetRecordResponse,
} from "@/shared";

export type UpdateBudgetEntity = {
  budgetId: string;
  category: string;
  plannedTotal: number;
};

export const getBudget = createAsyncThunk<GetBudgetResponse, GetBudgetDto>(
  "budget/getBudget",
  async ({ month, year }: GetBudgetDto) => {
    const response = await fetch(`/api/get-budget/${month}/${year}`, {
      method: "GET",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json().then((res) => res.data);

    return data;
  }
);

export const createBudget = createAsyncThunk<CreateBudgetResponse, Date>(
  "budget/createBudget",
  async (date: Date) => {
    const payload = {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    const response = await fetch(`/api/create-budget`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await response.json().then((res) => res.data);

    return data;
  }
);

export const updateBudgetRecord = createAsyncThunk<
  UpdateBudgetRecordResponse,
  UpdateBudgetRecordDto
>(
  "budget/updateBudgetRecord",
  async (
    payload: UpdateBudgetRecordDto
  ): Promise<UpdateBudgetRecordResponse> => {
    const response = await fetch(`/api/update-budget-record`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await response.json().then((res) => res.data);

    return data;
  }
);

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
    builder.addCase(getBudget.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getBudget.fulfilled, (state, { payload }) => {
      state.loading = "loaded";
      if (!payload) {
        return;
      }
      state.records = payload;
    });
    builder.addCase(getBudget.rejected, (state, { error }) => {
      state.loading = "error";
      state.error = error.message as string;
    });
    builder.addCase(createBudget.fulfilled, (state, { payload }) => {
      state.loading = "loaded";
      state.records = payload;
    });
    builder.addCase(createBudget.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(createBudget.rejected, (state, { error }) => {
      state.loading = "error";
      state.error = error.message as string;
    });
    builder.addCase(updateBudgetRecord.fulfilled, (state, action) => {
      const payload = action.payload as unknown as BudgetRecord;
      state.loading = "loaded";
      state.records = state.records.map((record) => {
        if (record._id === payload._id) {
          return payload;
        }
        return record;
      });
    });
    builder.addCase(updateBudgetRecord.pending, (state) => {
      state.loading = "loading";
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = budgetSlice.actions;

export const BudgetReducer = budgetSlice.reducer;
