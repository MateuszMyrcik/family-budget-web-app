import { ThemeOptions } from "@mui/material";
import { COLOR } from "./colors";
import { COMMON_THEME } from "./common";

export const THEME_PALETTE: ThemeOptions["palette"] = {
  common: {
    black: COLOR.DARK_PAPER,
  },
  primary: {
    light: COLOR.PRIMARY_LIGHT,
    main: COLOR.PRIMARY_MAIN,
    dark: COLOR.PRIMARY_DARK,
    200: COLOR.PRIMARY_200,
    800: COLOR.PRIMARY_800,
  },
  secondary: {
    light: COLOR.SECONDARY_LIGHT,
    main: COLOR.SECONDARY_MAIN,
    dark: COLOR.SECONDARY_DARK,
    200: COLOR.SECONDARY_200,
    800: COLOR.SECONDARY_800,
  },
  error: {
    light: COLOR.ERROR_LIGHT,
    main: COLOR.ERROR_MAIN,
    dark: COLOR.ERROR_DARK,
  },

  warning: {
    light: COLOR.WARNING_LIGHT,
    main: COLOR.WARNING_MAIN,
    dark: COLOR.WARNING_DARK,
  },
  success: {
    light: COLOR.SUCCESS_LIGHT,
    200: COLOR.SUCCESS_200,
    main: COLOR.SUCCESS_MAIN,
    dark: COLOR.SUCCESS_DARK,
  },
  grey: {
    50: COLOR.GREY_50,
    100: COLOR.GREY_100,
    500: COMMON_THEME.DARK_TEXT_SECONDARY,
    600: COMMON_THEME.HEADING,
    700: COMMON_THEME.DARK_TEXT_PRIMARY,
    900: COMMON_THEME.TEXT_DARK,
  },

  text: {
    primary: COMMON_THEME.DARK_TEXT_PRIMARY,
    secondary: COMMON_THEME.DARK_TEXT_SECONDARY,
  },
  background: {
    paper: COMMON_THEME.PAPER,
    default: COMMON_THEME.BACKGROUND_DEFAULT,
  },
};
