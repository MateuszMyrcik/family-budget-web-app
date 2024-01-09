import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";

import { withModel } from "../withModel";
import dynamic from "next/dynamic";

import { AnnualStatementBarChart } from "./AnnualStatementBarChart";
import useResizeObserver from "use-resize-observer";

const Base = () => {
  const { t } = useTranslation("common");
  const { ref: barChartRef, width: barChartWidth = 0 } =
    useResizeObserver<HTMLDivElement>();

  const GroupedExpensesPieChart = dynamic(
    () =>
      import("./GroupedExpensesPieChart").then(
        (mod) => mod.GroupedExpensesPieChart
      ),
    { ssr: false }
  );

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title={t("stats.title")}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Paper elevation={0}>
                  <Card
                    sx={{
                      padding: 3,
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h5">
                      {t("stats.expensesInGroups")}
                    </Typography>
                    <Box height={400}>
                      <GroupedExpensesPieChart />
                    </Box>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper elevation={0}>
                  <Card
                    sx={{
                      padding: 3,
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                    }}
                    ref={barChartRef}
                  >
                    <Typography variant="h5">
                      {t("stats.annualStatement")}
                    </Typography>
                    <AnnualStatementBarChart
                      height={400}
                      width={barChartWidth}
                    />
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};

export const StatsView = withModel(Base);
