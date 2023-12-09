import {
  useClassificationAction,
  useClassificationServiceStatus,
} from "@/entities/classification";
import {
  useTransaction,
  useTransactionAction,
  useTransactionServiceStatus,
} from "@/entities/transaction";
import { useIdFromParams } from "@/hooks/useIdFromParams";
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { TransactionViewProps } from "./components";

export const withUpdateModel = (
  Component: ComponentType<TransactionViewProps>
) => {
  const ComponentWithUpdateModel = function ComponentWithModel(
    props: TransactionViewProps
  ) {
    const router = useRouter();
    const { id } = useIdFromParams();
    const { transaction } = useTransaction(id);

    const classificationService = useClassificationServiceStatus();
    const transactionService = useTransactionServiceStatus();

    const { fetchClassification } = useClassificationAction();
    const { getTransactions } = useTransactionAction();

    useEffect(() => {
      fetchClassification();
      getTransactions();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!classificationService.isSuccess || !transactionService.isSuccess) {
      return null;
    }

    if (!transaction) {
      router.push("/404"); // TODO: 404 page
      return null; // TODO: 404 page
    }

    return (
      <Component
        {...props}
        defaultValues={transaction}
        actionType="update"
        transactionId={id}
      />
    );
  };

  return ComponentWithUpdateModel;
};
