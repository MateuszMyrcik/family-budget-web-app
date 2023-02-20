import TextField, { TextFieldProps } from "@mui/material/TextField";

type FormFieldProps = {} & TextFieldProps;

export const FormField = (props: FormFieldProps) => {
  return <TextField {...props}></TextField>;
};
