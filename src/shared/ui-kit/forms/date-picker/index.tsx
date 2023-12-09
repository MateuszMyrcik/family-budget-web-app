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
  // const inputRef = React.useRef<HTMLInputElement | null>(null);

  // React.useEffect(() => {
  //   debugger;
  //   if (inputRef.current && !props.value) {
  //     inputRef.current.value = "";
  //   }
  // }, [props.value, inputRef, props]);

  // React.useEffect(() => {
  //   if (cleared) {
  //     const timeout = setTimeout(() => {
  //       setCleared(false);
  //     }, 1500);

  //     return () => clearTimeout(timeout);
  //   }
  //   return () => {};
  // }, [cleared]);
  // console.log("value", props.value);
  return (
    <>
      <MuiDatePicker className={pickerClasses} {...props} />
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </>
  );
};
