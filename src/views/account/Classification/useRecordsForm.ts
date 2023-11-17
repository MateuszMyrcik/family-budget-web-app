import { RootState } from "@/app/store";
import { useTransactionAction } from "@/entities/transaction";
import { TransactionCategory } from "@/shared/domain";
import { yupResolver } from "@hookform/resolvers/yup";
import { add } from "date-fns";
import { useFieldArray, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { schema } from "./schema";

type FormValues = TransactionCategory[];

export const useRecordsForm = () => {
  const { categories } = useSelector(
    (state: RootState) => state.transactionSlice
  );

  const { addCategory } = useTransactionAction();
  const { control, handleSubmit, register } = useForm<FormValues>({
    defaultValues: categories,
    resolver: yupResolver(schema),
  });
  // const { fields} = useFieldArray({
  //   control,
  //   name: "categories",
  // });

  const onSubmit = (data: FormValues) => {
    // const groupCategory = Object.keys(data).find(
    //   (key) => data[key as keyof FormValues]
    // ) as keyof FormValues | undefined;
    // if (!groupCategory) return;

    // const category = data[groupCategory as keyof FormValues];
    // // addCategory({ groupCategory, category, type: "EXPENSE" });

    // console.log(category);
    // console.log(groupCategory);
    console.log(data); // TODO: handle submit with api
  };

  return {
    control,
    onSubmit,
    register,
    categories,
    handleSubmit,
  };
};
