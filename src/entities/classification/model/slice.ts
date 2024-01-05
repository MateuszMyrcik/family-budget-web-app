import { add } from "date-fns";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ClassificationReducers,
  ClassificationState,
  VitalClassificationRecord,
} from "../types";
import { ClassificationAdapter } from "../adapters";

const initialState: ClassificationState = {
  classificationRecords: [],
  loading: "idle",
  error: null,
};

export const fetchClassification = createAsyncThunk(
  "classification/fetchClassification",
  async () => {
    const response = await fetch(`/api/get-classifications`, {
      method: "GET",
    });

    return response.json().then((res) => res.data);
  }
);

export const addClassificationRecord = createAsyncThunk(
  "classification/addClassificationRecord",
  async (record: VitalClassificationRecord) => {
    const response = await fetch(`/api/add-classification`, {
      method: "POST",
      body: JSON.stringify(
        ClassificationAdapter.toCreateClassificationRecordDto(record)
      ),
    });

    return response.json().then((res) => res.data);
  }
);

export const removeClassificationRecord = createAsyncThunk(
  "classification/removeClassificationRecord",
  async (id: string) => {
    const response = await fetch(`/api/remove-classification`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    return response.json().then((res) => res.data);
  }
);

export const updateClassificationRecord = createAsyncThunk(
  "classification/updateClassificationRecord",
  async (record: VitalClassificationRecord) => {
    const response = await fetch(`/api/update-classification`, {
      method: "POST",
      body: JSON.stringify({
        ...ClassificationAdapter.toUpdateClassificationRecordDto(record),
        id: record.id,
      }),
    });

    return response.json().then((res) => res.data);
  }
);

export const classificationSlice = createSlice<
  ClassificationState,
  ClassificationReducers,
  "classification"
>({
  name: "classification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassification.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchClassification.fulfilled, (state, action) => {
        state.classificationRecords = action.payload;
        state.loading = "loaded";
      })
      .addCase(fetchClassification.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(addClassificationRecord.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(addClassificationRecord.fulfilled, (state, action) => {
        state.classificationRecords.push(action.payload);
        state.loading = "loaded";
      })
      .addCase(addClassificationRecord.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(removeClassificationRecord.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(removeClassificationRecord.fulfilled, (state, action) => {
        state.classificationRecords = state.classificationRecords.filter(
          (record) => record._id !== action.payload
        );
        state.loading = "loaded";
      })
      .addCase(updateClassificationRecord.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(updateClassificationRecord.fulfilled, (state, action) => {
        state.classificationRecords = state.classificationRecords.map(
          (record) => {
            if (record._id === action.payload._id) {
              return action.payload;
            }
            return record;
          }
        );
        state.loading = "loaded";
      })
      .addCase(updateClassificationRecord.rejected, (state, action) => {
        state.loading = "error";

        state.error = action.error.message ?? "Unknown error";
      });
  },
});

// Action creators are generated for each case reducer function
// export const { removeClassification } = classificationSlice.actions;

export const ClassificationReducer = classificationSlice.reducer;
