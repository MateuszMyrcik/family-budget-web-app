import {
  GetUserInfoResponse,
  GetUserProfileResponse,
  UniqueId,
  UserRole,
} from "@/shared";
import { Household } from "@/shared/domain/types/household";

export type User = GetUserProfileResponse;

export type FetchUserInfoResponse = Omit<GetUserInfoResponse, "_id"> & {
  _id: UniqueId;
};
export type FetchUserProfileResponse = GetUserProfileResponse;

export type UserInfo = {
  id: string;
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

export type UserReducers = {};
