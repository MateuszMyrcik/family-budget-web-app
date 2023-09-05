import { ThemeOptions } from "@mui/material";

import type { LabComponents } from "@mui/lab/themeAugmentation";
import { COLOR } from "./colors";
import { THEME_TYPOGRAPHY } from "./typography";
import { COMMON_THEME } from "./common";

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
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontWeight: 600,
        color: COMMON_THEME.HEADING,
        fontSize: "0.75rem",
        lineHeight: 1,
        // ...(THEME_TYPOGRAPHY.h6 ?? {}),
      },
      body: {
        fontWeight: 400,
        color: COLOR.GREY_500,
        fontSize: "0.75rem",
        lineHeight: 1,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      colorSuccess: {
        backgroundColor: COLOR.SUCCESS_MAIN,
        color: COLOR.PAPER,
      },
      colorError: {
        backgroundColor: COLOR.ERROR_MAIN,
        color: COLOR.PAPER,
      },
      colorInfo: {
        backgroundColor: COLOR.BLUE_500,
        color: COLOR.PAPER,
      },
    },
  },
};
