import { RootState } from "@/app/store";
import { useBudgetAction } from "@/entities/budget";
import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const EmptyContent = () => {
  const { t } = useTranslation("common");
  const { addNewBudget } = useBudgetAction();
  const { date } = useSelector((state: RootState) => state.updateBudgetSlice);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 4,
        gap: 3,
      }}
    >
      <Image
        src="/images/plan-budget-2.png"
        alt="plan budget"
        width={250}
        height={250}
        style={{ borderRadius: "25%" }}
      />

      <Typography variant="h4">{t("budget.noDataTitle")}</Typography>
      <Typography variant="h5">{t("budget.noDataDescription")}</Typography>
      <Button onClick={() => addNewBudget(date)} variant={"contained"}>
        <Add sx={{ marginRight: 1 }} /> {t("budget.addNewBudget")}
      </Button>
    </Box>
  );
};
