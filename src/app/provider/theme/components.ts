import { ThemeOptions } from "@mui/material";

import type { LabComponents } from "@mui/lab/themeAugmentation";
import { COLOR } from "./colors";

export const THEME_COMPONENTS: ThemeOptions["components"] & LabComponents = {
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
  MuiTabPanel: {
    styleOverrides: {
      root: {
        marginTop: 24,
        padding: 0,
        border: `1px solid ${COLOR.PRIMARY_LIGHT}`,
        borderRadius: "12px",
      },
    },
  },
};
