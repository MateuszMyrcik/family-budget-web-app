export const createLookup = <T extends string>(arr: T[]) =>
  arr.reduce((acc, item) => ({ ...acc, [item]: item }), {} as Record<T, T>);
