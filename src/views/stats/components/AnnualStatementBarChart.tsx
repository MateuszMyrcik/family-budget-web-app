import {
  isExpenseTransaction,
  isIncomeTransaction,
  useActualTransactions,
} from "@/entities/transaction";
import { Transaction } from "@/shared";
import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useTranslation } from "react-i18next";

type Props = {
  width: number;
  height: number;
};

export const AnnualStatementBarChart = ({ width, height }: Props) => {
  const { t } = useTranslation("common");
  const { transactions } = useActualTransactions();
  const isEmpty = transactions.length === 0;

  if (isEmpty) {
    return (
      <Box
        sx={{
          minHeight: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">{t("global.noData")}</Typography>
      </Box>
    );
  }

  const getMonthsNameFromNow = (months: number) => {
    const monthsName: number[] = [];

    Array.from({ length: months }).forEach((_, i) => {
      monthsName.push(i + 1);
    });

    return monthsName;
  };

  const groupNames = getMonthsNameFromNow(12);

  const getCurrentYearAnnualSummitKeys = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const annualSummit = {};
    for (let i = 0; i < 12; i++) {
      const month = i + 1;
      const key = `${currentYear}-${month}`;
      (annualSummit as any)[key] = [];
    }
    return annualSummit;
  };

  const mapTransactionsToAnnualSummit = (
    transactions: Transaction[],
    annualSummit: Record<string, Transaction[]>
  ) => {
    transactions.forEach((transaction) => {
      const date = new Date(transaction.transactionDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month}`;

      if (annualSummit[key]) {
        annualSummit[key].push(transaction);
      }
    });
    return annualSummit;
  };

  const annualSummit = getCurrentYearAnnualSummitKeys();
  const transactionsMappedToAnnualSummit = mapTransactionsToAnnualSummit(
    transactions,
    annualSummit
  );

  const expenses = Object.values(transactionsMappedToAnnualSummit).map(
    (transactions) => {
      return transactions.reduce((acc, transaction) => {
        if (isExpenseTransaction(transaction)) {
          return acc + transaction.amount.value;
        }
        return acc;
      }, 0);
    }
  );
  const incomes = Object.values(transactionsMappedToAnnualSummit).map(
    (transactions) => {
      return transactions.reduce((acc, transaction) => {
        if (isIncomeTransaction(transaction)) {
          return acc + transaction.amount.value;
        }
        return acc;
      }, 0);
    }
  );

  return (
    <BarChart
      colors={["lightGreen", "#f73378"]}
      xAxis={[{ scaleType: "band", data: groupNames }]}
      series={[{ data: incomes }, { data: expenses }]}
      width={width}
      height={height}
    />
  );
};
