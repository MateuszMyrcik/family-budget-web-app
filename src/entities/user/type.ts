import {
  GetUserInfoResponse,
  GetUserProfileResponse,
  UserRole,
} from "@/shared";
import { Household } from "@/shared/domain/types/household";

export type User = GetUserProfileResponse;

export type FetchUserInfoResponse = GetUserInfoResponse;
export type FetchUserProfileResponse = GetUserProfileResponse;

export type UserInfo = {
  _id: string;
  email: string;
  role: UserRole;
  household?: Household;
  isInvitePending: boolean;
};

export type UserState = {
  user: User;
  info: UserInfo;
  error: string | null;
  loading: "idle" | "loading" | "loaded" | "error";
};

export type UserReducers = {
  setUser: (state: UserState, action: { payload: UserInfo }) => void;
};
