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

import { useState } from "react";
import { Provider } from "react-redux";
import { FamilyContent } from "./Family/Content";
import { PasswordContent } from "./Password/Content";
import { ProfileContent } from "./Profile/Content";
import { useTranslation } from "next-i18next";
import { TransactionCategoryContent } from "./TransactionCategory/Content";

export const AccountView = () => {
  const [value, setValue] = useState("1");
  const { t } = useTranslation("common");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("title")}>
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
                          <AccountCircle sx={{ marginRight: "12px" }} />
                          {t("account.profileTab")}
                        </div>
                      }
                      value="1"
                    />
                    <Tab
                      label={
                        <div>
                          <Lock sx={{ marginRight: "12px" }} />
                          {t("account.changePasswordTab")}
                        </div>
                      }
                      value="2"
                    />
                    <Tab
                      label={
                        <div>
                          <FamilyRestroom sx={{ marginRight: "12px" }} />
                          {t("account.familyGroupTab")}
                        </div>
                      }
                      value="3"
                    />
                    <Tab
                      label={
                        <div>
                          <Category sx={{ marginRight: "12px" }} />
                          {t("account.transactionCategoryTab")}
                        </div>
                      }
                      value="4"
                    />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <ProfileContent />
                </TabPanel>
                <TabPanel value="2">
                  <PasswordContent />
                </TabPanel>
                <TabPanel value="3">
                  <FamilyContent />
                </TabPanel>
                <TabPanel value="4">
                  <TransactionCategoryContent />
                </TabPanel>
              </TabContext>
            </Box>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
