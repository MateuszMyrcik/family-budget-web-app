import { DefaultTemplate } from "@/app/layout";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useExpenseAction } from "@/entities/expenses";
import { useRouter } from "next/router";
import * as uuid from "uuid";
import { DatePicker, Select, TextField } from "@/shared/ui-kit";
import { getExpenseCategoriesItems } from "./lib";
import { FormGroup } from "@mui/material";
import { ExpenseCategory } from "@/shared/domain";

type FormValues = {
  name: string;
  category: ExpenseCategory;
  amountValue: number;
  date: Date;
};

const expenseSchema = yup.object().shape({
  name: yup.string().required(),
  amountValue: yup.number().required(),
  category: yup.string().required(),
});

export const ExpenseView = () => {
  const { addExpense } = useExpenseAction();
  const { push } = useRouter();
  const { control, handleSubmit } = useForm<Partial<FormValues>>({
    resolver: yupResolver(expenseSchema),
  });

  const onSubmit = (data: Partial<FormValues>) => {
    const isValid = expenseSchema.isValidSync(data);

    if (isValid) {
      const mockedFamilyId = "1";
      const mockedOwnerId = "1";

      addExpense({
        ...data,
        date: new Date(),
        ownership: {
          familyId: mockedFamilyId,
          ownerId: mockedOwnerId,
        },
        amount: {
          currency: "PLN",
          value: data.amountValue,
        },
        category: data.category,
        id: uuid.v4(),
        groupCategory: "OTHER",
      });
      push("/expenses");
    }
  };

  return (
    <>
      <DefaultTemplate>
        <div className="w-10/12 mx-auto mt-4">
          <h1>Family budget | Expense </h1>

          <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      label="Nazwa"
                      placeholder="Wpisz nazwę wydatku"
                      error={!!error}
                      helperText={error?.message || null}
                      {...field}
                    />
                  )}
                />
              </FormGroup>

              <FormGroup>
                <Controller
                  name="category"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      {...field}
                      error={error}
                      label={"Wybierz kategorię wydatku"}
                      items={getExpenseCategoriesItems()}
                    />
                  )}
                />
              </FormGroup>

              <FormGroup>
                <Controller
                  name="amountValue"
                  control={control}
                  render={({
                    field,
                    fieldState: { error },
                    formState: { defaultValues },
                  }) => (
                    <TextField
                      {...field}
                      label="Kwota"
                      placeholder="Wpisz kwotę wydatku"
                      error={!!error}
                      helperText={error?.message || null}
                      type="number"
                      prefix="PLN"
                    />
                  )}
                />
              </FormGroup>

              <DatePicker></DatePicker>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
