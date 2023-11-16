import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EMPTY_USER } from "../constants";
import {
  FetchUserInfoResponse,
  FetchUserProfileResponse,
  UserReducers,
  UserState,
} from "../type";
import { toast } from "react-toastify";
import { USER_ROLE } from "@/shared";

const initialState: UserState = {
  user: EMPTY_USER,
  info: {
    _id: "",
    email: "",
    household: undefined,
    role: USER_ROLE.GUEST,
    isInvitePending: false,
  },
  error: null,
  loading: "idle",
};

export const declineInvite = createAsyncThunk(
  "user/declineInvite",
  async (inviteId: string, thunkApi) => {
    const response = await fetch(`/api/decline-invite`, {
      body: JSON.stringify({ inviteId }),
      method: "POST",
    });

    if (response.ok) {
      thunkApi.dispatch(fetchUserInfo());
    } else {
      console.error("Error declining invite", response.statusText);
    }

    return response.json();
  }
);

export const acceptInvite = createAsyncThunk(
  "user/acceptInvite",
  async (inviteId: string, thunkApi) => {
    const response = await fetch(`/api/accept-invite`, {
      body: JSON.stringify({ inviteId }),
      method: "POST",
    });

    if (response.ok) {
      thunkApi.dispatch(fetchUserInfo());
    } else {
      console.error("Error accepting invite", response.statusText);
    }

    return response.json();
  }
);

export const fetchHousehold = createAsyncThunk(
  "user/household",
  async (_, thunkApi) => {
    const response = await fetch(`/api/household`);
    return response.json();
  }
);

export const createHousehold = createAsyncThunk(
  "user/createHousehold",
  async (_, thunkApi) => {
    const response = await fetch(`/api/create-household`, {
      method: "POST",
    });

    if (response.ok) {
      thunkApi.dispatch(fetchUserInfo());
    } else {
      console.error("Error creating household", response.statusText);
    }

    return response.json();
  }
);

export const removeMember = createAsyncThunk(
  "user/removeMember",
  async (userId: string, thunkApi) => {
    const response = await fetch(`/api/remove-member`, {
      body: JSON.stringify({ userId }),
      method: "POST",
    });

    if (response.ok) {
      thunkApi.dispatch(fetchUserInfo());
    } else {
      console.error("Error removing member", response.statusText);
    }

    return response.json();
  }
);

export const joinHousehold = createAsyncThunk(
  "user/joinHousehold",
  async (ownerEmail: string, thunkApi) => {
    const response = await fetch(`/api/join-household`, {
      body: JSON.stringify({ ownerEmail }),
      method: "POST",
    });

    if (response.ok) {
      thunkApi.dispatch(fetchUserInfo());
    } else {
      console.error("Error joining household", response.statusText);
      toast.error(`Email niepoprawny, spróbuj ponownie`, {
        theme: "colored",
      });
    }

    return response.json();
  }
);

export const removeHousehold = createAsyncThunk(
  "user/removeHousehold",
  async (_, thunkApi) => {
    const response = await fetch(`/api/remove-household`, {
      method: "POST",
    });

    if (response.ok) {
      thunkApi.dispatch(fetchUserInfo());
    } else {
      console.error("Error removing household", response.statusText);
    }

    return response.json();
  }
);

export const fetchUserInfo = createAsyncThunk<FetchUserInfoResponse, void, {}>(
  "user/fetchUserInfo",
  async () => {
    const response = await fetch(`/api/user-info`);

    if (response.ok) {
      return response.json();
    }

    throw new Error("Error fetching user info");
  }
);

export const fetchUserProfile = createAsyncThunk<
  FetchUserProfileResponse,
  void,
  {}
>("user/fetchUserProfile", async () => {
  const response = await fetch(`api/user-profile`);

  if (response.ok) {
    return response.json();
  }

  throw new Error("Error fetching user profile");
});

export const userSlice = createSlice<UserState, UserReducers, "user">({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = "loaded";
        state.info = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = "loaded";
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const UserReducer = userSlice.reducer;
