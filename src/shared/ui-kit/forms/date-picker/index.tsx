import * as React from "react";
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";

type DatePickerProps = {} & MuiDatePickerProps<any>;

export const DatePicker = (props: DatePickerProps) => {
  return <MuiDatePicker label="Basic date picker" />;
};
