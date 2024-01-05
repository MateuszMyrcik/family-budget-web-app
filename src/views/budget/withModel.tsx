import { useBudgetAction, useBudgetServiceStatus } from "@/entities/budget";

import { ComponentType, useEffect } from "react";

export const withModel = (
  Component: ComponentType,
  ComponentSkeleton?: ComponentType
) => {
  const ComponentWithModel = function ComponentWithModel(props: any) {
    const { getBudget } = useBudgetAction();
    const current = {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

    useEffect(() => {
      getBudget(current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} />;
  };

  return ComponentWithModel;
};
