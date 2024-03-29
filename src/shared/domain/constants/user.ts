import { createLookup } from "../../utils";

export const USER_ROLES = ["ADMIN", "OWNER", "MEMBER", "GUEST"] as const;

export const USER_ROLE = createLookup(USER_ROLES);
