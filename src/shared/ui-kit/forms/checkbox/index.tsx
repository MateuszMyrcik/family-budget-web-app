import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
} from "@mui/material";

type CheckboxProps = { label: string } & MuiCheckboxProps;

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  return (
    <FormControlLabel
      label={label}
      labelPlacement="end"
      control={<MuiCheckbox {...rest}></MuiCheckbox>}
    ></FormControlLabel>
  );
};
