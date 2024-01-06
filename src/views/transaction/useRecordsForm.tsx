import { useTransactionAction } from "@/entities/transaction";
import {
  ClassificationType,
  Frequency,
  TRANSACTION_TYPE,
} from "@/shared/domain";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { transactionSchema } from "./schema";

import { getSelectItems } from "./lib";
import { useClassificationRecords } from "@/entities/classification";
import { useLang } from "@/hooks/useLang";
import { useUserId } from "@/entities/user";
import { FormValues } from "./types";

import { UniqueId } from "@/shared";
import { useEffect } from "react";

type UseRecordsFormArgs = {
  actionType: "add" | "update";
  defaultValues?: Partial<FormValues>;
  transactionId?: UniqueId;
};

export const useRecordsForm = ({
  actionType,
  defaultValues,
  transactionId,
}: UseRecordsFormArgs) => {
  const { createTransaction, updateTransaction, createCyclicTransaction } =
    useTransactionAction();
  const { classificationRecords } = useClassificationRecords();

  const { userId } = useUserId();
  const { currentLang } = useLang();
  const { push } = useRouter();

  const { watch, control, handleSubmit, resetField } = useForm<
    Partial<FormValues>
  >({
    resolver: yupResolver(transactionSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const watchType = (watch("type") ??
    TRANSACTION_TYPE.EXPENSE) as ClassificationType;
  const isCyclic = watch("isCyclic") ?? false;

  const selectItems = getSelectItems(
    watchType,
    currentLang,
    classificationRecords
  );

  const onAddRecord = (data: Partial<FormValues>) => {
    const isValid = transactionSchema.isValidSync(data);
    const classificationRecord = classificationRecords.find(
      (record) => record._id === data.classificationRecordId
    );

    if (isCyclic && isValid && classificationRecord) {
      createCyclicTransaction({
        creatorId: userId,
        householdId: classificationRecord.householdId,
        name: data.name,
        startDate: data.date,
        classificationRecordId: data.classificationRecordId,
        comment: data.comments,
        amount: {
          currency: "PLN",
          value: data.amount.value,
        },
        occurrences: data.occurrences as number,
        frequency: data.frequency as Frequency,
      }).then(() => {
        push("/finance");
      });
      return;
    }

    if (isValid && classificationRecord) {
      createTransaction({
        creatorId: userId,
        householdId: classificationRecord.householdId,
        name: data.name,
        transactionDate: data.date,
        classificationRecordId: data.classificationRecordId,
        comment: data.comments,
        amount: {
          currency: "PLN",
          value: data.amount.value,
        },
      }).then(() => {
        push("/finance");
      });

      return;
    }
  };

  const onUpdateRecord = (data: Partial<FormValues>) => {
    const isValid = transactionSchema.isValidSync(data);
    const classificationRecord = classificationRecords.find(
      (record) => record._id === data.classificationRecordId
    );

    if (!transactionId) {
      return;
    }

    if (isValid && classificationRecord) {
      updateTransaction({
        id: transactionId,
        creatorId: userId,
        householdId: classificationRecord.householdId,
        name: data.name,
        transactionDate: data.date,
        classificationRecordId: data.classificationRecordId,
        comment: data.comments,
        amount: {
          currency: "PLN",
          value: data.amount.value,
        },
      }).then(() => {
        push("/finance");
      });
    }
  };

  const onSubmit = actionType === "add" ? onAddRecord : onUpdateRecord;

  useEffect(() => {
    resetField("date", { defaultValue: null });
    resetField("occurrences");
    resetField("frequency");
  }, [isCyclic, resetField]);

  return {
    control,
    onSubmit,
    isCyclic,
    selectItems,
    handleSubmit,
    onUpdateRecord,
  };
};
