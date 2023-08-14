import {
  getExpenseGroupCategory,
  getIncomeGroupCategory,
  useTransactionAction,
} from "@/entities/transaction";
import { Transaction, TRANSACTION_TYPE } from "@/shared/domain";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { expenseSchema } from "./schema";
import * as uuid from "uuid";

type FormValues = Transaction; // TODO: TS issue to cover, should be Omit<Transaction, "groupCategory">; https://stackoverflow.com/questions/60586984/typescript-omit-property-from-a-generic-interface

export const useRecordsForm = () => {
  const { addTransaction } = useTransactionAction();
  const { push } = useRouter();
  const { control, handleSubmit, watch } = useForm<Partial<FormValues>>({
    resolver: yupResolver(expenseSchema),
    defaultValues: { date: new Date() },
  });

  const watchType = watch("type") ?? TRANSACTION_TYPE.EXPENSE;

  const onSubmit = (data: Partial<FormValues>) => {
    const isValid = expenseSchema.isValidSync(data);

    if (isValid) {
      const mockedFamilyId = "1";
      const mockedOwnerId = "1";
      const transactionDetails =
        data.type === TRANSACTION_TYPE.EXPENSE
          ? {
              type: TRANSACTION_TYPE.EXPENSE,
              category: data.category,
              groupCategory: getExpenseGroupCategory(data.category),
            }
          : {
              type: TRANSACTION_TYPE.INCOME,
              category: data.category,
              groupCategory: getIncomeGroupCategory(data.category),
            };

      addTransaction({
        ...data,
        ownership: {
          familyId: mockedFamilyId,
          ownerId: mockedOwnerId,
        },
        amount: {
          currency: "PLN",
          value: data.amountValue,
        },
        id: uuid.v4(),
        ...transactionDetails,
      });
      push("/finance");
    }
  };

  return {
    control,
    onSubmit,
    watchType,
    handleSubmit,
  };
};
