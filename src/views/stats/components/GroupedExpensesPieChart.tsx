import { getClassificationGroupColors } from "@/entities/classification";
import {
  getActualTransactions,
  useTransactions,
  groupTransactionByGroupId,
  isExpenseTransaction,
  formatCurrencyValue,
} from "@/entities/transaction";

import { useLang } from "@/hooks/useLang";
import { Box, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { useTranslation } from "react-i18next";

export const GroupedExpensesPieChart = () => {
  const { transactions } = useTransactions();
  const { t } = useTranslation("common");
  const { currentLang } = useLang();
  const isEmpty = transactions.length === 0;

  if (isEmpty) {
    return (
      <Box
        sx={{
          minHeight: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">{t("global.noData")}</Typography>
      </Box>
    );
  }

  const actualTransactions = getActualTransactions(transactions);
  const expensesTransactions = actualTransactions.filter(isExpenseTransaction);
  const groupedTransactions = groupTransactionByGroupId(expensesTransactions);
  const normalizedData = Object.values(groupedTransactions).map((group) => {
    const sum = group.reduce((acc, transaction) => {
      return acc + transaction.amount.value;
    }, 0);
    const label = group[0].classificationRecord.group.label.find(
      (label) => label.lang === currentLang
    )?.value;
    return {
      id: label,
      value: sum,
      label: label,
      color: group[0].classificationRecord.group.decorationColor,
    };
  });

  return (
    <ResponsivePie
      data={normalizedData}
      enableArcLabels={true}
      enableArcLinkLabels={false}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      innerRadius={0.3}
      sortByValue={true}
      valueFormat={formatCurrencyValue}
      activeOuterRadiusOffset={5}
      padAngle={0.7}
      cornerRadius={3}
      arcLabelsSkipAngle={15}
    />
  );
};
