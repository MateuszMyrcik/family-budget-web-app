import { getRoutePath, PrimaryTemplate } from "@/app/layout";
import { Controller } from "react-hook-form";

import { Button, DatePicker, Select, TextField } from "@/shared/ui-kit";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { TRANSACTION_FREQUENCY, TRANSACTION_TYPE } from "@/shared/domain";
import Link from "next/link";

import { useRecordsForm } from "../useRecordsForm";
import { useTranslation } from "next-i18next";
import { withAddModel } from "../withAddModel";
import { FormValues } from "../types";
import { withUpdateModel } from "../withUpdateModel";
import { useTransactionServiceStatus } from "@/entities/transaction";
import { FormSkeleton } from "./FormSkeleton";
import { useClassificationServiceStatus } from "@/entities/classification";

export type TransactionViewProps = {
  actionType?: "add" | "update";
  defaultValues?: Partial<FormValues>;
  transactionId?: string;
};

const Base = ({
  actionType = "add",
  defaultValues,
  transactionId,
}: TransactionViewProps) => {
  const { control, onSubmit, handleSubmit, selectItems, isCyclic } =
    useRecordsForm({
      defaultValues,
      actionType,
      transactionId,
    });

  const { isPending: isPendingTransaction } = useTransactionServiceStatus();
  const { isPending: isPendingClassification } =
    useClassificationServiceStatus();
  const { t } = useTranslation("common");

  const frequencySelectItems = [
    {
      label: t("transaction.dailyOption"),
      value: TRANSACTION_FREQUENCY.DAILY,
    },
    {
      label: t("transaction.weeklyOption"),
      value: TRANSACTION_FREQUENCY.WEEKLY,
    },
    {
      label: t("transaction.monthlyOption"),
      value: TRANSACTION_FREQUENCY.MONTHLY,
    },
    {
      label: t("transaction.yearlyOption"),
      value: TRANSACTION_FREQUENCY.YEARLY,
    },
  ];

  const isLoading = isPendingTransaction || isPendingClassification;

  return (
    <>
      <PrimaryTemplate>
        <PrimaryTemplate.Content
          title={t(`transaction.${actionType}TransactionTitle`)}
        >
          {isLoading ? (
            <FormSkeleton />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup row>
                <Controller
                  name="type"
                  control={control}
                  defaultValue={TRANSACTION_TYPE.EXPENSE}
                  render={({ field }) => (
                    <RadioGroup
                      sx={{ display: "flex", flexDirection: "row", padding: 0 }}
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
                <Controller
                  name="isCyclic"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value}
                          onChange={field.onChange}
                        />
                      }
                      label={t("transaction.isCyclicLabel")}
                    />
                  )}
                ></Controller>
              </FormGroup>
              {isCyclic && (
                <FormGroup row>
                  <Controller
                    control={control}
                    name="occurrences"
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        sx={{ flex: 1 }}
                        label={t("transaction.occurrencesLabel")}
                        placeholder={t("transaction.occurrencesPlaceholder")}
                        error={!!error}
                        helperText={error ? t(error.message) : null}
                        type="number"
                      />
                    )}
                  ></Controller>

                  <Controller
                    control={control}
                    name="frequency"
                    render={({ field, fieldState: { error } }) => (
                      <Select
                        {...field}
                        sx={{ flex: 1 }}
                        error={
                          error
                            ? { ...error, message: t(error.message) }
                            : undefined
                        }
                        label={t("transaction.frequencyLabel")}
                        items={frequencySelectItems}
                        placeholder={t("transaction.frequencyPlaceholder")}
                      />
                    )}
                  ></Controller>
                </FormGroup>
              )}
              <FormGroup row>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      sx={{ flex: 1 }}
                      label={t("transaction.nameLabel")}
                      placeholder={t("transaction.namePlaceholder")}
                      error={!!error}
                      helperText={error ? t(error.message) : null}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="classificationRecordId"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      {...field}
                      error={
                        error
                          ? { ...error, message: t(error.message) }
                          : undefined
                      }
                      label={t("transaction.categoryLabel")}
                      items={selectItems}
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
                      helperText={error ? t(error.message) : null}
                      type="number"
                      prefix="PLN"
                    />
                  )}
                />

                <Controller
                  name="date"
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <DatePicker
                        {...field}
                        label={
                          isCyclic
                            ? t("transaction.startDateLabel")
                            : t("transaction.dateLabel")
                        }
                        value={field.value}
                        disablePast={isCyclic}
                        disableFuture={!isCyclic}
                        error={!!error}
                        helperText={error ? t(error.message) : null}
                      />
                    );
                  }}
                />

                <Controller
                  name="comments"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      label={t("transaction.commentLabel")}
                      placeholder={t("transaction.commentPlaceholder")}
                      error={!!error}
                      helperText={error ? t(error.message) : null}
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
                  {t(`transaction.${actionType}Button`)}
                </Button>
              </div>
            </form>
          )}
        </PrimaryTemplate.Content>
      </PrimaryTemplate>
    </>
  );
};

export const AddTransactionView = withAddModel(Base);
export const UpdateTransactionView = withUpdateModel(Base);
