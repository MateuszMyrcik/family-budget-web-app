import { TRANSACTION_FREQUENCY } from "@/shared";
import { Select } from "@mui/material";
import { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = {
  field: any;
  error?: FieldError;
};

export const FrequencySelect = ({ field, error }: Props) => {
  const { t } = useTranslation("common");
  const selectItems = [
    { label: t("transaction.dailyOption"), value: TRANSACTION_FREQUENCY.DAILY },
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

  console.log(selectItems);

  return (
    <Select
      {...field}
      error={!!error}
      label={t("transaction.frequencyLabel")}
      items

      //   options={selectItems}
    />
  );
};
