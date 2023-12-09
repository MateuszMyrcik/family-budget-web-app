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
    const status = useTransactionServiceStatus();
    const statusClasification = useClassificationServiceStatus();

    useEffect(() => {
      getTransactions();
      fetchClassification();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!status.isSuccess || !statusClasification.isSuccess) {
      return null;
    }

    console.log("finance", status);

    return <Component {...props} />;
  };

  return ComponentWithModel;
};
