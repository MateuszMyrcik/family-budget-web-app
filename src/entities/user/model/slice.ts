import { MOCKED_USER } from "@/mocks/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: MOCKED_USER,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = MOCKED_USER;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser } = userSlice.actions;

export const UserReducer = userSlice.reducer;
