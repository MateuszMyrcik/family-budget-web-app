import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TransactionReducers, TransactionsState } from "../types";
import {
  CreateCyclicTransactionRequest,
  CreateTransactionRequest,
  GetTransactionsResponse,
  UpdateTransactionRequest,
} from "@/shared";

const initialState: TransactionsState = {
  transactions: [],
  error: null,
  loading: "idle",
};

export const getTransactions = createAsyncThunk<GetTransactionsResponse>(
  "transaction/getTransactions",
  async () => {
    const response = await fetch("/api/get-transactions");
    const data = await response.json().then((res) => res.data);

    return data;
  }
);

export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (transaction: CreateTransactionRequest) => {
    const response = await fetch("/api/create-transaction", {
      method: "POST",
      body: JSON.stringify(transaction),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    // Extract and return the data from the response
    const data = await response.json();
    return data; // This will be the fulfilled action payload
  }
);

export const createCyclicTransaction = createAsyncThunk(
  "transaction/createCyclicTransaction",
  async (cyclicTransaction: CreateCyclicTransactionRequest) => {
    const response = await fetch("/api/create-cyclic-transaction", {
      method: "POST",
      body: JSON.stringify(cyclicTransaction),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    // Extract and return the data from the response
    const data = await response.json();
    return data; // This will be the fulfilled action payload
  }
);

export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  async (transaction: UpdateTransactionRequest) => {
    const response = await fetch("/api/update-transaction", {
      method: "POST",
      body: JSON.stringify(transaction),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    // Extract and return the data from the response
    const data = await response.json();
    return data; // This will be the fulfilled action payload
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (transactionId: string) => {
    const response = await fetch("/api/remove-transaction", {
      method: "DELETE",

      body: JSON.stringify({ transactionId }),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    // Extract and return the data from the response
    const data = await response.json();
    return data; // This will be the fulfilled action payload
  }
);

export const transactionSlice = createSlice<
  TransactionsState,
  TransactionReducers,
  "transaction"
>({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.loading = "loaded";
      state.transactions = action.payload.transactions;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message as string;
    });
    builder.addCase(createTransaction.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(createTransaction.fulfilled, (state) => {
      state.loading = "loaded";
    });
    builder.addCase(createTransaction.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message as string;
    });
    builder.addCase(updateTransaction.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(updateTransaction.fulfilled, (state) => {
      state.loading = "loaded";
    });
    builder.addCase(updateTransaction.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message as string;
    });
    builder.addCase(removeTransaction.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(removeTransaction.fulfilled, (state, action) => {
      state.loading = "loaded";

      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.meta.arg
      );
    });
    builder.addCase(removeTransaction.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message as string;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = transactionSlice.actions;

export const TransactionReducer = transactionSlice.reducer;
