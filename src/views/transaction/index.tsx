import { getRoutePath, PrimaryTemplate } from "@/app/layout";
import { Controller } from "react-hook-form";

import { Button, DatePicker, Select, TextField } from "@/shared/ui-kit";
import { FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";
import { TRANSACTION_TYPE } from "@/shared/domain";
import Link from "next/link";

import { useRecordsForm } from "./useRecordsForm";
import { getSelectItems } from "./lib";

export const TransactionView = () => {
  const { control, watchType, onSubmit, handleSubmit } = useRecordsForm();

  return (
    <>
      <PrimaryTemplate>
        <PrimaryTemplate.Content title="Dodaj transakcję">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Controller
                name="type"
                control={control}
                defaultValue={TRANSACTION_TYPE.EXPENSE}
                render={({ field }) => (
                  <RadioGroup
                    sx={{ display: "flex", flexDirection: "row" }}
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <FormControlLabel
                      name="type"
                      value={TRANSACTION_TYPE.EXPENSE}
                      control={<Radio />}
                      label="Wydatek"
                    />
                    <FormControlLabel
                      name="type"
                      value={TRANSACTION_TYPE.INCOME}
                      control={<Radio />}
                      label="Przychód"
                    />
                  </RadioGroup>
                )}
              />
            </FormGroup>
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
                    items={getSelectItems(watchType)}
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
