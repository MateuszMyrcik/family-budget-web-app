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

type SelectItem = {
  value: string;
  label: string;
  isGroupItem?: boolean;
};

type SelectProps = {
  label: string;
  items: SelectItem[];
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
    <FormControl className="flex-1 w-full" error={!!error}>
      <InputLabel>{label}</InputLabel>

      <MuiSelect
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            disabled={item.isGroupItem}
          >
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>

      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
