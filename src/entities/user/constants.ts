import { USER_ROLE } from "@/shared";
import { User } from "./type";

export const EMPTY_USER: User = {
  _id: "",
  email: "",
  isInvitePending: false,
  name: undefined,
  avatarUrl: undefined,
  groupId: undefined,
  nickname: undefined,
  household: undefined,
  role: USER_ROLE.GUEST,
  surname: undefined,
};
