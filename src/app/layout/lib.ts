import { NAV_ITEMS, PathName } from "./constants";

export const getRoutePath = (path: PathName): string => {
  const navItem = NAV_ITEMS.find((item) => item.path === path);
  return navItem ? navItem.path : "/";
};
