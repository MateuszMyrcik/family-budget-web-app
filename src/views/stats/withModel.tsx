import {
  useClassificationAction,
  useClassificationServiceStatus,
} from "@/entities/classification";
import {
  useTransactionAction,
  useTransactionServiceStatus,
} from "@/entities/transaction";
import { ComponentType, useEffect } from "react";

export const withModel = (
  Component: ComponentType,
  ComponentSkeleton?: ComponentType
) => {
  const ComponentWithModel = function ComponentWithModel(props: any) {
    const { getTransactions } = useTransactionAction();
    const { fetchClassification } = useClassificationAction();

    useEffect(() => {
      getTransactions();
      fetchClassification();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} />;
  };

  return ComponentWithModel;
};
