import { PrimaryTemplate } from "@/app/layout";
import { RootState, store } from "@/app/store";

import { Box, Button, Typography } from "@mui/material";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import { Provider, useSelector } from "react-redux";
import {
  formatDate,
  getTransactionsBalance,
  getTotalExpenseAmount,
  getTotalIncomeAmount,
} from "./lib";

export const FinanceView = () => {
  const { transactions } = useSelector(
    (state: RootState) => state.transactionSlice
  );
  const { push } = useRouter();
  const { t } = useTranslation("common");

  const incomeTotal = getTotalIncomeAmount(transactions);
  const expenseTotal = getTotalExpenseAmount(transactions);
  const balance = getTransactionsBalance(transactions);

  // add translations for this view
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
                  <Typography
                    variant="body1"
                    // color={balance > -1 ? "success.main" : "error.main"}
                  >
                    {t("finance.balance")} {balance}
                  </Typography>
                </Box>
                <Button
                  onClick={() => {
                    push("/transaction");
                  }}
                  variant="contained"
                >
                  {t("finance.addTransaction")}
                </Button>
              </Box>

              <div className="flex flex-col gap-2 text-sm">
                {transactions.map(
                  ({ amount, date, name, category, type }, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[40px_300px_100px_100px] items-center p-2 border-[1px] rounded-lg gap-2 hover:bg-gray-100 cursor-pointer justify-between"
                    >
                      <div className=" text-gray-500 text-sm">
                        {formatDate(date)}
                      </div>
                      <div className="basis-40 flex-grow-0">{name}</div>
                      <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                        {category}
                      </div>
                      <div
                        className={clsx(
                          "text-base",
                          type === "INCOME"
                            ? "text-success-main"
                            : "text-error-main"
                        )}
                      >
                        {amount.value}
                      </div>
                    </div>
                  )
                )}
              </div>
            </>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
