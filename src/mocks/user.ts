import { User } from "@/shared/domain";

export const MOCKED_USER: User = {
  _id: "1",
  isInvitePending: false,
  name: "John",
  surname: "Doe",
  email: "john.doe@gmail.com",
  createdAt: new Date(),
  role: "ADMIN",
};
