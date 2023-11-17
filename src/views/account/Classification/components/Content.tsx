import { isIncome, isExpense } from "@/entities/transaction";
import { Box, Grid, Typography, useTheme } from "@mui/material";

import { ClassificationGroup } from "./Group";
import { useTranslation } from "react-i18next";
import { withModel } from "../withModel";
import { useClassificationRecords } from "@/entities/classification";
import { groupBy } from "rambda";
import { ClassificationRecord } from "@/shared";
import { Skeleton } from "./Skeleton";

const Base = () => {
  const { classificationRecords } = useClassificationRecords();
  const { t } = useTranslation("common");
  const { palette } = useTheme();
  const incomeRecords = classificationRecords.filter(({ type }) =>
    isIncome(type)
  );
  const expenseRecords = classificationRecords.filter(({ type }) =>
    isExpense(type)
  );

  const groupedIncomeRecords = groupBy<ClassificationRecord>(
    (record) => record.group._id,
    incomeRecords
  );
  const groupedExpenseRecords = groupBy<ClassificationRecord>(
    (record) => record.group._id,
    expenseRecords
  );

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
        {Object.keys(groupedExpenseRecords).map((groupKey, index) => (
          <ClassificationGroup
            key={index}
            records={groupedExpenseRecords[groupKey]}
          />
        ))}

        {Object.keys(groupedIncomeRecords).map((groupKey, index) => (
          <ClassificationGroup
            key={index}
            records={groupedIncomeRecords[groupKey]}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export const ClassificationContent = withModel(Base, Skeleton);
