import { UniqueId } from "@/shared/commonTypes";
import { User } from "./user";

export type Household = {
  name: string;
  members: User[];
  createdAt: Date;
  owner: User;
  pendingInvites: Invite[];
};

export type Invite = {
  _id: UniqueId;
  sender: User;
  createdAt: Date;
};

export type GetHouseholdResponse = Household;
