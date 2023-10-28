import { THEME_TYPOGRAPHY } from "./typography";
import { THEME_COMPONENTS } from "./components";
import { THEME_PALETTE } from "./palette";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import * as locales from "@mui/material/locale";

export const getTheme = () => {
  const themeOptions = {
    palette: THEME_PALETTE,
    typography: THEME_TYPOGRAPHY,
    components: THEME_COMPONENTS,
  };

  return createTheme(themeOptions, locales.plPL);
};

type ProviderProps = {
  children: React.ReactNode;
};

export const WithThemeProvider = ({ children }: ProviderProps) => {
  const appTheme = getTheme();

  return <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>;
};
