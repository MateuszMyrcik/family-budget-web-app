import { ThemeOptions } from "@mui/material";

import type { LabComponents } from "@mui/lab/themeAugmentation";
import { COLOR } from "./colors";
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

  MuiPaper: {
    styleOverrides: {
      root: {
        border: `2px solid ${COLOR.GREY_200}`,
        borderRadius: 12,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        },
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
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
};
