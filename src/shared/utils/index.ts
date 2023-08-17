import { i18n } from "next-i18next";

export const createLookup = <T extends string>(arr: T[]) =>
  arr.reduce(
    (acc, item) => ({ ...acc, [item]: item }),
    {} as { [key in T]: Extract<T, key> }
  );

export const translate = (key: string) => {
  return i18n?.t(key);
};
