import { getRoutePath, PrimaryTemplate } from "@/app/layout";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useExpenseAction } from "@/entities/expenses";
import { useRouter } from "next/router";
import * as uuid from "uuid";
import { Button, DatePicker, Field, Select, TextField } from "@/shared/ui-kit";
import { getExpenseCategoriesItems } from "./lib";
import { FormGroup } from "@mui/material";
import { ExpenseCategory } from "@/shared/domain";
import Link from "next/link";

type FormValues = {
  comment: string;
  name: string;
  category: ExpenseCategory;
  amountValue: number;
  date: Date;
};

const expenseSchema = yup.object().shape({
  comments: yup.string(),
  name: yup.string().required(),
  amountValue: yup.number().required(),
  category: yup.string().required(),
  date: yup.date().required(),
});

export const TransactionView = () => {
  const { addExpense } = useExpenseAction();
  const { push } = useRouter();
  const { control, handleSubmit } = useForm<Partial<FormValues>>({
    resolver: yupResolver(expenseSchema),
    defaultValues: { date: new Date() },
  });

  const onSubmit = (data: Partial<FormValues>) => {
    const isValid = expenseSchema.isValidSync(data);

    if (isValid) {
      const mockedFamilyId = "1";
      const mockedOwnerId = "1";

      addExpense({
        ...data,
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
      <PrimaryTemplate>
        <PrimaryTemplate.Content title="Dodaj transakcję">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup row>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label="Nazwa"
                    placeholder="Np. Zakupy w sklepie"
                    error={!!error}
                    helperText={error?.message || null}
                    {...field}
                  />
                )}
              />

              <Controller
                name="category"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    error={error}
                    label={"Wybierz kategorię"}
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

              <Controller
                name="date"
                control={control}
                render={({
                  field,
                  fieldState: { error },
                  formState: { defaultValues },
                }) => (
                  <DatePicker
                    {...field}
                    defaultValue={defaultValues?.date}
                    label="Wybierz datę"
                    disableFuture
                    error={!!error}
                    helperText={error?.message || null}
                  />
                )}
              />

              <Controller
                name="comment"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label="Uwagi"
                    placeholder="Wpisz uwage do wydatku"
                    error={!!error}
                    helperText={error?.message || null}
                    {...field}
                  />
                )}
              />
            </FormGroup>

            <div className="flex place-content-between">
              <Button variant="outlined">
                <Link href={getRoutePath("/finance")}>Wróć</Link>
              </Button>
              <Button
                color="primary"
                type="submit"
                variant="contained"
                className="min-w-24"
              >
                Dodaj
              </Button>
            </div>
          </form>
        </PrimaryTemplate.Content>
      </PrimaryTemplate>
    </>
  );
};
