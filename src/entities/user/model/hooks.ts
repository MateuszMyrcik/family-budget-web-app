import {
  acceptInvite,
  createHousehold,
  declineInvite,
  fetchUserInfo,
  joinHousehold,
  removeHousehold,
  removeMember,
} from "./slice";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";

import { isOwner } from "../lib";

type ServiceStatus = {
  isIdle: boolean;
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  error: string | null;
};

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    fetchUserInfo: () => dispatch(fetchUserInfo() as any),
    joinHousehold: (ownerEmail: string) =>
      dispatch(joinHousehold(ownerEmail) as any),
    createHousehold: () => dispatch(createHousehold() as any),
    acceptInvite: (inviteId: string) => dispatch(acceptInvite(inviteId) as any),
    declineInvite: (inviteId: string) =>
      dispatch(declineInvite(inviteId) as any),
    removeMember: (userId: string) => dispatch(removeMember(userId) as any),
    removeHousehold: () => dispatch(removeHousehold() as any),
  };
};

export const useIsActiveUser = () => {
  const userSlice = useSelector((state: RootState) => state.userSlice);
  const { info } = userSlice;
  return !!info.household;
};

export const useIsOwner = () => {
  const userSlice = useSelector((state: RootState) => state.userSlice);
  const { info } = userSlice;
  return isOwner(info.role);
};

export const useIsInvitePending = () => {
  const userSlice = useSelector((state: RootState) => state.userSlice);
  const { info } = userSlice;
  return info.isInvitePending;
};

export const useServiceStatus = (): ServiceStatus => {
  const userSlice = useSelector((state: RootState) => state.userSlice);
  return {
    error: userSlice.error,
    isIdle: userSlice.loading === "idle",
    isError: userSlice.loading === "error",
    isPending: userSlice.loading === "loading",
    isSuccess: userSlice.loading === "loaded",
  };
};

export const useHousehold = () => {
  const userSlice = useSelector((state: RootState) => state.userSlice);
  return userSlice.info.household;
};

export const useHouseholdOwnerId = () => {
  const userSlice = useSelector((state: RootState) => state.userSlice);
  return userSlice.info.household?.owner._id;
};

export const useUserId = () => {
  const { info } = useSelector((state: RootState) => state.userSlice);
  return { userId: info.id };
};

export const useUserEmail = () => {
  const { info } = useSelector((state: RootState) => state.userSlice);
  return { email: info.email };
};
