import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import { expenseSchema } from "./schema";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useBudgetAction } from "@/entities/budget";

import { useEffect } from "react";
import { useUpdateBudgetAction } from ".";

type FormValues = {
  date: Date;
  record: Record<string, number> | null;
  updatedCategory: string;
  hideEmptyRecords: boolean;
};

export const useRecordsForm = () => {
  const { records } = useSelector((state: RootState) => state.budgetSlice);
  const { date } = useSelector((state: RootState) => state.updateBudgetSlice);

  const { updateBudgetRecord, getBudget } = useBudgetAction();
  const { dateChanged } = useUpdateBudgetAction();

  const arrayToObject = (array: any[]) =>
    array.reduce((obj, item) => {
      obj[item.category] = item.plannedTotal;
      return obj;
    }, {});

  const { control, handleSubmit } = useForm<Partial<FormValues>>({
    resolver: yupResolver(expenseSchema),
    values: {
      date,
      record: {
        ...arrayToObject(records ?? []),
      },
      hideEmptyRecords: false,
    },
  });
  const dateField = useWatch({
    control,
    name: "date",
  });

  const hideEmptyRecords = useWatch({
    control,
    name: "hideEmptyRecords",
  });

  const onSubmit = (data: Partial<FormValues>) => {
    const isValid = [data.date, data.updatedCategory].every(Boolean);

    if (!isValid) {
      return;
    }

    const category = data.updatedCategory as string;
    const plannedTotal = Number(
      (data.record as any)[data.updatedCategory as string] as string
    );

    updateBudgetRecord({
      recordId: category,
      plannedTotal,
    });
  };

  useEffect(() => {
    if (!dateField) {
      return;
    }

    dateChanged(dateField as Date);
  }, [dateField]);

  return {
    date,
    records,
    control,
    onSubmit,
    handleSubmit,
    hideEmptyRecords,
  };
};
