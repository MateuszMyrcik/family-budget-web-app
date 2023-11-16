import { UserRole, USER_ROLE } from "@/shared";
import { UserInfo } from "./type";

export const isActiveUser = ({ household }: UserInfo) => {
  return !!household;
};

export const isOwner = (role: UserRole) => {
  return role === USER_ROLE.OWNER;
};
