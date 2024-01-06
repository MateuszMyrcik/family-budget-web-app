import * as React from "react";
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { Box, FormHelperText } from "@mui/material";
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
    <Box>
      <MuiDatePicker className={pickerClasses} {...props} />

      {error && (
        <FormHelperText error sx={{ marginX: "14px", marginTop: "3px" }}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
};
