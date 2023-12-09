import {
  useClassificationAction,
  useClassificationServiceStatus,
} from "@/entities/classification";
import { ComponentType, useEffect } from "react";
import { TransactionViewProps } from "./components";

export const withAddModel = (
  Component: ComponentType<TransactionViewProps>
) => {
  const ComponentWithAddModel = function ComponentWithModel(
    props: TransactionViewProps
  ) {
    const { fetchClassification } = useClassificationAction();
    const { isSuccess } = useClassificationServiceStatus();

    useEffect(() => {
      fetchClassification();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isSuccess) {
      return null;
    }

    return <Component {...props} />;
  };

  return ComponentWithAddModel;
};
