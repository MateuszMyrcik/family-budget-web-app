import { ThemeOptions } from "@mui/material";
import { COLOR } from "./colors";

export const THEME_COMPONENTS: ThemeOptions["components"] = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        backgroundColor: COLOR.GREY_50,
      },
    },
  },
  MuiFormGroup: {
    styleOverrides: {
      root: {
        gap: 24,
        paddingBottom: 24,
      },
    },
  },
};
