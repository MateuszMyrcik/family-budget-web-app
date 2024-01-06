import { Select } from "@mui/material";
import { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = {
  field: any;
  error?: FieldError;
};

export const FrequencySelect = ({ field, error }: Props) => {
  const { t } = useTranslation("common");

  return (
    <Select
      {...field}
      error={error ? { ...error, message: t(error.message) } : undefined}
      label={t("transaction.frequencyLabel")}
      items
      helperText={error ? t(error.message) : null}
    />
  );
};
