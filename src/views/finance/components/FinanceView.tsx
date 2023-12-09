import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { useTransactions, getActualTransactions } from "@/entities/transaction";

import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const { transactions } = useTransactions();
  const { push } = useRouter();
  const { t } = useTranslation("common");

  const incomeTotal = getTotalIncomeAmount(transactions);
  const expenseTotal = getTotalExpenseAmount(transactions);
  const balance = getTransactionsBalance(transactions);
  const filteredTransactions = withPlannedTransactions
    ? transactions
    : getActualTransactions(transactions);

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("finance.pageTitle")}>
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                pb={2}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography variant="body1">
                    {t("finance.incomeTotal")} {incomeTotal}
                  </Typography>
                  <Typography variant="body1">
                    {t("finance.expenseTotal")} {expenseTotal}
                  </Typography>
                  <Typography variant="body1">
                    {t("finance.balance")} {balance}
                  </Typography>
                </Box>
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

                <Button
                  onClick={() => {
                    push("/transaction");
                  }}
                  variant="contained"
                >
                  {t("finance.addTransaction")}
                </Button>
              </Box>

              <TransactionsTable transactions={filteredTransactions} />
            </>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};

export const FinanceView = withModel(Base);
