/* eslint-disable @next/next/no-html-link-for-pages */
import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Divider, List, ListItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Provider } from "react-redux";

export const SummaryView = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("homepage.pageTitle")}>
            <Typography variant="h5">
              PRACA INŻYNIERSKA - PROJEKT I REALIZACJA APLIKACJI INTERNETOWEJ
              WSPOMAGAJĄCEJ ZARZĄDZANIE BUDŻETEM DOMOWYM
            </Typography>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>
                Aplikacja &quot;Family budget&quot; jest aplikacją internetową wspomagającą
              zarządzanie budżetem domowym. Aplikacja umożliwia tworzenie
              nastepujacych scenariuszy:
            </Typography>
            <List>
              <ListItem disableGutters>
                <Typography variant="body1">
                  - Tworzenie budżetu domowego
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1">
                  - Tworzenie klasyfikacji/kategori wydatków
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1">-Tworzenie wydatków</Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1">-Tworzenie przychodów</Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1">
                  - Analizę wydatków i przychodów
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1">
                  - Zarządzanie grupą domową
                </Typography>
              </ListItem>
            </List>
            <Typography variant="body1" sx={{ paddingTop: 1 }}>
              Dodatkowo aplikacja umożliwia zmianę języka na polski i angielski.
            </Typography>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
