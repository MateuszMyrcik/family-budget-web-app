import { getRoutePath, PrimaryTemplate } from "@/app/layout";
import { Controller } from "react-hook-form";

import { Button, DatePicker, Select, TextField } from "@/shared/ui-kit";
import { FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";
import { TRANSACTION_TYPE } from "@/shared/domain";
import Link from "next/link";

import { useRecordsForm } from "./useRecordsForm";
import { getSelectItems } from "./lib";
import { useTranslation } from "next-i18next";

export const TransactionView = () => {
  const { control, watchType, onSubmit, handleSubmit } = useRecordsForm();
  const { t } = useTranslation("common");

  return (
    <>
      <PrimaryTemplate>
        <PrimaryTemplate.Content title={t("transaction.pageTitle")}>
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
                      label={t("transaction.expenseLabel")}
                    />
                    <FormControlLabel
                      name="type"
                      value={TRANSACTION_TYPE.INCOME}
                      control={<Radio />}
                      label={t("transaction.incomeLabel")}
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
                    label={t("transaction.nameLabel")}
                    placeholder={t("transaction.namePlaceholder")}
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
                    label={t("transaction.categoryLabel")}
                    items={getSelectItems(watchType)}
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <Controller
                name="amount.value"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label={t("transaction.amountLabel")}
                    placeholder={t("transaction.amountPlaceholder")}
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
                    label={t("transaction.dateLabel")}
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
                    label={t("transaction.commentLabel")}
                    placeholder={t("transaction.commentPlaceholder")}
                    error={!!error}
                    helperText={error?.message || null}
                    {...field}
                  />
                )}
              />
            </FormGroup>

            <div className="flex place-content-between">
              <Button variant="outlined">
                <Link href={getRoutePath("/finance")}>
                  {t("transaction.backButton")}
                </Link>
              </Button>
              <Button
                color="primary"
                type="submit"
                variant="contained"
                className="min-w-24"
              >
                {t("transaction.addButton")}
              </Button>
            </div>
          </form>
        </PrimaryTemplate.Content>
      </PrimaryTemplate>
    </>
  );
};
