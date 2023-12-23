import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import {
  useTransactions,
  getActualTransactions,
  formatCurrencyValue,
} from "@/entities/transaction";
import { TrendingDownOutlined, TrendingUpOutlined } from "@mui/icons-material";

import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import { useState } from "react";
import { Provider } from "react-redux";
import {
  getTransactionsBalance,
  getTotalExpenseAmount,
  getTotalIncomeAmount,
} from "../lib";
import { withModel } from "../withModel";
import { TransactionsTable } from "./TransactionsTable";

const Base = () => {
  const [withPlannedTransactions, setWithPlannedTransactions] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { transactions } = useTransactions();
  const { push } = useRouter();
  const { t } = useTranslation("common");

  const selectedTransactions = withPlannedTransactions
    ? transactions
    : getActualTransactions(transactions);

  const incomeTotal = getTotalIncomeAmount(selectedTransactions);
  const expenseTotal = getTotalExpenseAmount(selectedTransactions);

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("finance.pageTitle")}>
            <Grid container pb={2} sx={{ alignItems: "center" }}>
              <Grid item xs={12} md={4} sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "success.main", fontWeight: "bold" }}
                >
                  <TrendingUpOutlined
                    sx={{ marginRight: 1 }}
                    fontSize="large"
                  />
                  {formatCurrencyValue(incomeTotal)}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "error.main", fontWeight: "bold" }}
                >
                  <TrendingDownOutlined
                    sx={{ marginRight: 1 }}
                    fontSize="large"
                  />
                  {formatCurrencyValue(expenseTotal)}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <FormControlLabel
                  control={
                    <Switch
                      value={withPlannedTransactions}
                      onChange={() =>
                        setWithPlannedTransactions(!withPlannedTransactions)
                      }
                      disabled={!transactions.length}
                    />
                  }
                  label={t("finance.showPlannedTransactions")}
                />
              </Grid>
              <Grid
                item
                xs={6}
                md={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  onClick={() => {
                    push("/transaction");
                  }}
                  variant="contained"
                >
                  {t("finance.addTransaction")}
                </Button>
              </Grid>
            </Grid>

            <TransactionsTable transactions={selectedTransactions} />
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};

export const FinanceView = withModel(Base);
