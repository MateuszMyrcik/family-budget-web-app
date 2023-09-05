import { translate } from "@/shared/utils";
import { NAV_ITEMS, PathName } from "./constants";

export const getRoutePath = (path: PathName): string => {
  const navItem = NAV_ITEMS.find((item) => item.path === path);
  return navItem ? navItem.path : "/";
};

export const getNavItems = () => {
  return NAV_ITEMS.map((item) => ({
    ...item,
    label: translate(item.labelKey),
    path: getRoutePath(item.path),
  }));
};
