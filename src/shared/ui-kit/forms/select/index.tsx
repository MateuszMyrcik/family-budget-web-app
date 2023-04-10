import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  FormHelperText,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { ErrorOption as ReactHookFormError } from "react-hook-form";

type SelectProps = {
  label: string;
  items: { value: string; label: string }[];
  error?: ReactHookFormError;
  onChange: (...event: any[]) => void;
} & Omit<MuiSelectProps, "onChange" | "error">;

export const Select = ({ label, items, error, onChange }: SelectProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    onChange(event);
  };

  return (
    <FormControl className="flex-1" error={!!error}>
      <InputLabel id="demo-simple-select-error-label">{label}</InputLabel>

      <MuiSelect
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>

      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
