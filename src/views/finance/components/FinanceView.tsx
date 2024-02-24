import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import {
  useTransactions,
  formatCurrencyValue,
  useTransactionServiceStatus,
} from "@/entities/transaction";
import { TrendingDownOutlined, TrendingUpOutlined } from "@mui/icons-material";

import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { DatePicker } from "@mui/x-date-pickers";

import { useRouter } from "next/router";
import { useState } from "react";
import { Provider } from "react-redux";
import {
  getPlannedTransactions,
  getTotalExpenseAmount,
  getTotalIncomeAmount,
  getTransactionByMonth,
} from "../lib";
import { withModel } from "../withModel";
import { TransactionsTable } from "./TransactionsTable";
import { TableSkeleton } from "./TableSkeleton";

const Base = () => {
  const [withPlannedTransactions, setWithPlannedTransactions] = useState(false);
  const { transactions } = useTransactions();
  const { isPending } = useTransactionServiceStatus();
  const { push } = useRouter();
  const { t } = useTranslation("common");
  const [date, setDate] = useState<Date>(new Date());

  const selectedTransactions = withPlannedTransactions
    ? getPlannedTransactions(transactions)
    : getTransactionByMonth(transactions, date);

  const incomeTotal = getTotalIncomeAmount(selectedTransactions);
  const expenseTotal = getTotalExpenseAmount(selectedTransactions);

  const isLoading = isPending;

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("finance.pageTitle")}>
            <Grid container pb={2} sx={{ alignItems: "center", gap: 2 }}>
              <DatePicker
                views={["month", "year"]}
                value={date}
                disableFuture
                disabled={withPlannedTransactions}
                onAccept={(date) => {
                  setDate(date as any);
                }}
              />

              <FormControlLabel
                control={
                  <Switch
                    value={withPlannedTransactions}
                    onChange={() => {
                      setWithPlannedTransactions(!withPlannedTransactions);
                    }}
                  />
                }
                label={t("finance.showPlannedTransactions")}
              />
            </Grid>

            <Grid container pb={2} sx={{ alignItems: "center" }}>
              <Grid item xs={6} md={6} sx={{ display: "flex", gap: 2 }}>
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
              <Grid
                item
                xs={6}
                md={6}
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

            {isLoading && <TableSkeleton />}
            {!isLoading && (
              <TransactionsTable transactions={selectedTransactions} />
            )}
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};

export const FinanceView = withModel(Base);
