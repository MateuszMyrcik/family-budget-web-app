import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldProps = {} & MuiTextFieldProps;

export const TextField = (props: TextFieldProps) => {
  return (
    <MuiTextField sx={{ borderRadius: "12px" }} color="primary" {...props} />
  );
};
