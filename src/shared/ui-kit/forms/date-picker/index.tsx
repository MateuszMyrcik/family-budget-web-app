import * as React from "react";
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { FormHelperText } from "@mui/material";
import clsx from "clsx";

type DatePickerProps = {
  error?: boolean;
  helperText?: string | null;
} & MuiDatePickerProps<any>;

export const DatePicker = ({
  error,
  helperText,
  ...props
}: DatePickerProps) => {
  const pickerClasses = clsx(props.className, "w-full");
  return (
    <>
      <MuiDatePicker className={pickerClasses} {...props} />
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </>
  );
};
