import { Budget, BudgetCategoryRecord } from "@/shared/domain";
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
import { getBudgetRecordStatus, getGroupedBudget, getTotal } from "../lib";
import { useRecordsForm } from "../model/useRecordsForm";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { EmptyContent } from "./EmptyContent";
import { BarChart } from "@mui/icons-material";

export const UpdateBudgetForm = () => {
  const { isEmpty } = useSelector(
    (state: RootState) => state.updateBudgetSlice
  );
  const { t } = useTranslation("common");
  const { palette } = useTheme();
  const { control, handleSubmit, onSubmit, budget, hideEmptyRecords } =
    useRecordsForm();

  const groupedRecords = isEmpty
    ? []
    : getGroupedBudget(budget as Budget).groupedRecords;

  const { actual, planned } = getTotal(budget as Budget);

  const budgetRecordStatus = (record: BudgetCategoryRecord) => {
    const { isOver, isUnder } = getBudgetRecordStatus(record);

    if (isUnder) {
      return <Chip label={<>Wydajesz mniej 😄 </>} color="success"></Chip>;
    } else if (isOver) {
      return <Chip label={<>Wydajesz więcej 😞 </>} color="error"></Chip>;
    } else {
      return <Chip label={<>Idealnie! 🎉 </>} color="info"></Chip>;
    }
  };

  return (
    <>
      <form>
        <FormGroup row>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker {...field} views={["month", "year"]} />
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

        {isEmpty && <EmptyContent />}
        {!isEmpty && (
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
            <Table>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    {groupedRecords.map((record, index) => (
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
                        <TableCell variant="body">
                          {record.categoryLabel}
                        </TableCell>
                        <TableCell variant="body" align="right">
                          <Controller
                            name={`record.${record.category}`}
                            control={control}
                            render={({ field, fieldState: { error } }) => {
                              console.log(field.value, field.name);
                              return (
                                <TextField
                                  {...field}
                                  size="small"
                                  inputProps={{ min: 0 }}
                                  label={t("budget.plannedAmountLabel")}
                                  onBlur={handleSubmit((data) => {
                                    data.updatedCategory = record.category;
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
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Table>
          </>
        )}
      </form>
    </>
  );
};
