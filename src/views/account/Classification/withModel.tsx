import {
  useClassificationAction,
  useClassificationServiceStatus,
} from "@/entities/classification";
import { ComponentType, useEffect } from "react";

export const withModel = (
  Component: ComponentType,
  ComponentSkeleton: ComponentType
) => {
  const ComponentWithModel = function ComponentWithModel(props: any) {
    const { fetchClassification } = useClassificationAction();
    const { isSuccess } = useClassificationServiceStatus();

    useEffect(() => {
      fetchClassification();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isSuccess) {
      return <ComponentSkeleton />;
    }

    return <Component {...props} />;
  };

  return ComponentWithModel;
};
