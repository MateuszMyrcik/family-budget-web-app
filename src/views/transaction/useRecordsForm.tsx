import { useTransactionAction } from "@/entities/transaction";
import { Transaction, TRANSACTION_TYPE } from "@/shared/domain";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { expenseSchema } from "./schema";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { getSelectItems } from "./lib";

type FormValues = Transaction; // TODO: TS issue to cover, should be Omit<Transaction, "groupCategory">; https://stackoverflow.com/questions/60586984/typescript-omit-property-from-a-generic-interface

export const useRecordsForm = () => {
  const { addTransaction } = useTransactionAction();
  const { categories } = useSelector(
    (state: RootState) => state.transactionSlice
  );
  const { push } = useRouter();
  const { control, handleSubmit, watch, formState } = useForm<
    Partial<FormValues>
  >({
    resolver: yupResolver(expenseSchema),
    defaultValues: { date: new Date() },
  });

  const watchType = watch("type") ?? TRANSACTION_TYPE.EXPENSE;

  const selectItems = getSelectItems(watchType, categories);
  const onSubmit = (data: Partial<FormValues>) => {
    const isValid = expenseSchema.isValidSync(data);
    const transactionDetails = categories.find(
      (category) => category.category === data.category
    );

    if (isValid && transactionDetails) {
      const mockedFamilyId = "1";
      const mockedOwnerId = "1";

      addTransaction({
        ...data,
        ownership: {
          familyId: mockedFamilyId,
          ownerId: mockedOwnerId,
        },
        amount: {
          currency: "PLN",
          value: data.amount.value,
        },
        ...transactionDetails,
      });
      push("/finance");
    }
  };

  return {
    control,
    onSubmit,
    selectItems,
    handleSubmit,
  };
};
