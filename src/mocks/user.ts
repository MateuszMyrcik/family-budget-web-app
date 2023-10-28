import { User } from "@/shared/domain";

export const MOCKED_USER: User = {
  id: "1",
  name: "John",
  surname: "Doe",
  email: "john.doe@gmail.com",
  createdAt: new Date(),
  role: "ADMIN",
};
