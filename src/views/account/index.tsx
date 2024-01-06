import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import {
  AccountCircle,
  Category,
  FamilyRestroom,
  Lock,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { Box, Tab } from "@mui/material";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { FamilyContent } from "./Family/Content";
import { PasswordContent } from "./Password/Content";
import { ProfileContent } from "./Profile/Content";
import { useTranslation } from "next-i18next";
import { ClassificationContent } from "./Classification";

const TAB_NAME = {
  PROFILE: "profile",
  PASSWORD: "password",
  FAMILY: "family",
  TRANSACTION_CATEGORIES: "transactionCategories",
};

const DEFAULT_TAB = TAB_NAME.TRANSACTION_CATEGORIES;

export const AccountView = () => {
  const [value, setValue] = useState(DEFAULT_TAB);
  const { t } = useTranslation("common");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    history.pushState(null, "", `?tab=${newValue}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab) {
      setValue(tab);
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("account.pageTitle")}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    variant="scrollable"
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label={
                        <div>
                          <Category sx={{ marginRight: "12px" }} />
                          {t("account.transactionCategoryTab")}
                        </div>
                      }
                      value={TAB_NAME.TRANSACTION_CATEGORIES}
                    />
                    <Tab
                      label={
                        <div>
                          <FamilyRestroom sx={{ marginRight: "12px" }} />
                          {t("account.familyGroupTab")}
                        </div>
                      }
                      value={TAB_NAME.FAMILY}
                    />
                    <Tab
                      disabled
                      label={
                        <div>
                          <AccountCircle sx={{ marginRight: "12px" }} />
                          {t("account.profileTab")}
                        </div>
                      }
                      value={TAB_NAME.PROFILE}
                    />
                    <Tab
                      disabled
                      label={
                        <div>
                          <Lock sx={{ marginRight: "12px" }} />
                          {t("account.changePasswordTab")}
                        </div>
                      }
                      value={TAB_NAME.PASSWORD}
                    />
                  </TabList>
                </Box>

                <TabPanel value={TAB_NAME.PROFILE}>
                  <ProfileContent />
                </TabPanel>
                <TabPanel value={TAB_NAME.PASSWORD}>
                  <PasswordContent />
                </TabPanel>
                <TabPanel value={TAB_NAME.FAMILY}>
                  <FamilyContent />
                </TabPanel>
                <TabPanel value={TAB_NAME.TRANSACTION_CATEGORIES}>
                  <ClassificationContent />
                </TabPanel>
              </TabContext>
            </Box>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
