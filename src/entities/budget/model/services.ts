import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  CreateBudgetResponse,
  GetBudgetDto,
  GetBudgetResponse,
  UpdateBudgetRecordDto,
  UpdateBudgetRecordResponse,
} from "@/shared";

const getBudget = createAsyncThunk<GetBudgetResponse, GetBudgetDto>(
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

const createBudget = createAsyncThunk<CreateBudgetResponse, Date>(
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

const updateBudgetRecord = createAsyncThunk<
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

export { getBudget, createBudget, updateBudgetRecord };
