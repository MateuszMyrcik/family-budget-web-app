import { BudgetRecord } from "@/shared/domain";
import {
  Box,
  Chip,
  FormControlLabel,
  FormGroup,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { getBudgetRecordStatus, getTotal } from "../lib";
import { useRecordsForm } from "../model/useRecordsForm";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { EmptyContent } from "./EmptyContent";
import { BarChart } from "@mui/icons-material";
import { useLang } from "@/hooks/useLang";
import { useBudgetAction, useBudgetServiceStatus } from "@/entities/budget";
import { RecordsSkeleton } from "./RecordsSkeleton";

export const UpdateBudgetForm = () => {
  const { date } = useSelector((state: RootState) => state.updateBudgetSlice);
  const { isPending } = useBudgetServiceStatus();
  const { currentLang } = useLang();
  const { t } = useTranslation("common");
  const { palette } = useTheme();
  const { control, handleSubmit, onSubmit, hideEmptyRecords } =
    useRecordsForm();
  const { records } = useSelector((state: RootState) => state.budgetSlice);
  const { getBudget } = useBudgetAction();
  const currentRecords = records.filter((record) => {
    return (
      record.month === date.getMonth() + 1 && record.year === date.getFullYear()
    );
  });
  const isEmpty = currentRecords.length === 0;

  const { actual, planned } = isEmpty
    ? { actual: 0, planned: 0 }
    : getTotal(records);

  const budgetRecordStatus = (record: BudgetRecord) => {
    const { isOver, isUnder } = getBudgetRecordStatus(record);

    if (isUnder) {
      return <Chip label={<>Wydajesz mniej 😄 </>} color="success"></Chip>;
    } else if (isOver) {
      return <Chip label={<>Wydajesz więcej 😞 </>} color="error"></Chip>;
    } else {
      return <Chip label={<>Idealnie! 🎉 </>} color="info"></Chip>;
    }
  };

  const isContentLoading = isPending;
  const isContentEmpty = isEmpty && !isPending;
  const isContentVisible = !isEmpty && !isPending;

  return (
    <Box>
      <form>
        <FormGroup row>
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <DatePicker
                {...field}
                views={["month", "year"]}
                onAccept={(date) => {
                  onChange(date);
                  return (
                    date &&
                    getBudget({
                      month: date.getMonth() + 1,
                      year: date.getFullYear(),
                    })
                  );
                }}
              />
            )}
          />
          <Controller
            name="hideEmptyRecords"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Switch {...field} />}
                label={t("budget.hideEmptyRecords")}
                disabled={isEmpty}
              />
            )}
          />
        </FormGroup>
        {isContentLoading && <RecordsSkeleton />}

        {isContentEmpty && <EmptyContent />}
        {isContentVisible && (
          <>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <BarChart />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2">
                  {t("budget.plannedTotalLabel")}:
                </Typography>
                <Typography marginLeft={0.5} variant="subtitle1">
                  {planned}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2">
                  {t("budget.actualTotalLabel")}:
                </Typography>
                <Typography
                  marginLeft={0.5}
                  variant={"subtitle1"}
                  sx={{
                    color:
                      actual > planned
                        ? palette.error.dark
                        : palette.success.dark,
                  }}
                >
                  {actual}
                </Typography>
              </Box>
            </Box>

            <TableContainer sx={{ minWidth: 342 }}>
              <Table sx={{ overflow: "auto" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell variant="head">
                      {t("budget.categoryLabel")}
                    </TableCell>
                    <TableCell variant="head" align="right">
                      {t("budget.plannedAmountLabel")}
                    </TableCell>
                    <TableCell variant="head" align="right">
                      {t("budget.actualAmountLabel")}
                    </TableCell>
                    <TableCell variant="head" align="right">
                      {t("budget.differenceAmountLabel")}
                    </TableCell>
                    <TableCell variant="head" align="right">
                      {t("budget.statusLabel")}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentRecords.map((record, index) => {
                    if (!record.classification.labels) {
                      debugger;
                    }
                    const categoryLabel =
                      record.classification.labels.find(
                        (classification) => classification.lang === currentLang
                      )?.value ?? "";

                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:hover": {
                            backgroundColor: "grey.100",
                          },
                          display:
                            hideEmptyRecords && record.plannedTotal === 0
                              ? "none"
                              : "table-row",
                        }}
                      >
                        <TableCell variant="body">{categoryLabel}</TableCell>
                        <TableCell variant="body" align="right">
                          <Controller
                            name={`record.${record._id}`}
                            control={control}
                            render={({ field, fieldState: { error } }) => {
                              return (
                                <TextField
                                  {...field}
                                  size="small"
                                  inputProps={{ min: 0 }}
                                  inputMode="numeric"
                                  defaultValue={record.plannedTotal}
                                  label={t("budget.plannedAmountLabel")}
                                  onBlur={handleSubmit((data) => {
                                    data.updatedCategory = record._id;
                                    onSubmit(data);
                                  })}
                                  error={!!error}
                                  helperText={error?.message || null}
                                  variant="outlined"
                                  type="number"
                                />
                              );
                            }}
                          ></Controller>
                        </TableCell>
                        <TableCell variant="body" align="right">
                          {record.actualTotal}
                        </TableCell>
                        <TableCell variant="body" align="right">
                          {record.plannedTotal - record.actualTotal}
                        </TableCell>
                        <TableCell variant="body" align="right">
                          {budgetRecordStatus(record)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </form>
    </Box>
  );
};
