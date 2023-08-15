import { COMMON_THEME } from "./common";
import { ThemeOptions } from "@mui/material";

export const THEME_TYPOGRAPHY: ThemeOptions["typography"] = {
  h6: {
    fontWeight: 500,
    color: COMMON_THEME.HEADING,
    fontSize: "0.75rem",
  },
  h5: {
    fontSize: "0.875rem",
    color: COMMON_THEME.HEADING,
    fontWeight: 500,
  },
  h4: {
    fontSize: "1rem",
    color: COMMON_THEME.HEADING,
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.25rem",
    color: COMMON_THEME.HEADING,
    fontWeight: 600,
  },
  h2: {
    fontSize: "1.5rem",
    color: COMMON_THEME.HEADING,
    fontWeight: 700,
  },
  h1: {
    fontSize: "2.125rem",
    color: COMMON_THEME.HEADING,
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: COMMON_THEME.TEXT_DARK,
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 400,
    color: COMMON_THEME.DARK_TEXT_SECONDARY,
  },
  caption: {
    fontSize: "0.75rem",
    color: COMMON_THEME.DARK_TEXT_SECONDARY,
    fontWeight: 400,
  },
  body1: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.334em",
  },
  body2: {
    letterSpacing: "0em",
    fontWeight: 400,
    lineHeight: "1.5em",
    color: COMMON_THEME.DARK_TEXT_PRIMARY,
  },
  button: {
    textTransform: "capitalize",
  },
  // customInput: {
  //   marginTop: 1,
  //   marginBottom: 1,
  //   "& > label": {
  //     top: 23,
  //     left: 0,
  //     color: COLOR.GREY_500,
  //     '&[data-shrink="false"]': {
  //       top: 5,
  //     },
  //   },
  //   "& > div > input": {
  //     padding: "30.5px 14px 11.5px !important",
  //   },
  //   "& legend": {
  //     display: "none",
  //   },
  //   "& fieldset": {
  //     top: 0,
  //   },
  // },
  // mainContent: {
  //   backgroundColor: COMMON_THEME.BACKGROUND,
  //   width: "100%",
  //   minHeight: "calc(100vh - 88px)",
  //   flexGrow: 1,
  //   padding: "20px",
  //   marginTop: "88px",
  //   marginRight: "20px",
  //   borderRadius: `12px`,
  // },
  // menuCaption: {
  //   fontSize: "0.875rem",
  //   fontWeight: 500,
  //   color: COMMON_THEME.HEADING,
  //   padding: "6px",
  //   textTransform: "capitalize",
  //   marginTop: "10px",
  // },
  // subMenuCaption: {
  //   fontSize: "0.6875rem",
  //   fontWeight: 500,
  //   color: COMMON_THEME.DARK_TEXT_SECONDARY,
  //   textTransform: "capitalize",
  // },
  // commonAvatar: {
  //   cursor: "pointer",
  //   borderRadius: "8px",
  // },
  // smallAvatar: {
  //   width: "22px",
  //   height: "22px",
  //   fontSize: "1rem",
  // },
  // mediumAvatar: {
  //   width: "34px",
  //   height: "34px",
  //   fontSize: "1.2rem",
  // },
  // largeAvatar: {
  //   width: "44px",
  //   height: "44px",
  //   fontSize: "1.5rem",
  // },
};
