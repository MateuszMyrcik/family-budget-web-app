import {
  isExpenseTransaction,
  isIncomeTransaction,
  useActualTransactions,
} from "@/entities/transaction";
import { Transaction } from "@/shared";
import { BarChart } from "@mui/x-charts";

type Props = {
  width: number;
  height: number;
};

export const AnnualStatementBarChart = ({ width, height }: Props) => {
  const { transactions } = useActualTransactions();

  const getMonthsNameFromNow = (months: number) => {
    const monthsName: number[] = [];

    Array.from({ length: months }).forEach((_, i) => {
      monthsName.push(i + 1);
    });

    return monthsName;
  };

  const groupNames = getMonthsNameFromNow(12);

  const annualSummitMonthsFromNow = (months: number) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const annualSummit = {};
    for (let i = 0; i < months; i++) {
      const month = currentMonth - i;
      const year = currentYear;
      const key = `${year}-${month}`;
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
      const month = date.getMonth();
      const key = `${year}-${month}`;
      if (annualSummit[key]) {
        annualSummit[key].push(transaction);
      }
    });
    return annualSummit;
  };

  const annualSummit = annualSummitMonthsFromNow(12);
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

  console.log(expenses, incomes);

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
