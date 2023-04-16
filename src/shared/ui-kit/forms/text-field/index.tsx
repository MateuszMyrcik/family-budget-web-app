import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { clsx } from "clsx";

type TextFieldProps = {} & MuiTextFieldProps;

export const TextField = (props: TextFieldProps) => {
  const { className, ...rest } = props;
  const textFieldClasses = clsx(className, "w-full");
  return <MuiTextField className={textFieldClasses} {...props} />;
};
