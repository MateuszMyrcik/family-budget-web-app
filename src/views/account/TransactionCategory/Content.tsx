import { isIncome, isExpense } from "@/entities/transaction";
import { Box, Grid, Typography, useTheme } from "@mui/material";

import { TransactionCategoryGroup } from "./Group";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { groupBy } from "@/shared/utils";
import { useTranslation } from "react-i18next";

export const TransactionCategoryContent = () => {
  const { categories } = useSelector(
    (state: RootState) => state.transactionSlice
  );
  const { t } = useTranslation("common");
  const { palette } = useTheme();
  const incomeCategories = categories.filter(({ type }) => isIncome(type));
  const expenseCategories = categories.filter(({ type }) => isExpense(type));

  const groupedIncomeTransactions = groupBy("groupCategory")(incomeCategories);
  const groupedExpenseTransactions =
    groupBy("groupCategory")(expenseCategories);

  return (
    <Grid>
      <Box
        sx={{
          borderBottom: `1px solid ${palette.primary.light}`,
          padding: "16px",
        }}
      >
        <Typography variant="h5">{t("account.categories")}</Typography>
      </Box>
      <Grid
        container
        direction={"row"}
        sx={{
          padding: "20px",
          gap: "24px",
        }}
      >
        {Object.keys(groupedExpenseTransactions).map((group, index) => (
          <TransactionCategoryGroup
            key={index}
            records={groupedExpenseTransactions[group]}
          />
        ))}

        {Object.keys(groupedIncomeTransactions).map((group, index) => (
          <TransactionCategoryGroup
            key={index}
            records={groupedIncomeTransactions[group]}
          />
        ))}
      </Grid>
    </Grid>
  );
};
