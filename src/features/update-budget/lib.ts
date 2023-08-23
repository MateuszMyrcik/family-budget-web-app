import { Budget, BudgetCategoryRecord } from "@/shared/domain";
import { groupBy } from "@/shared/utils";

export const getGroupedBudget = (budget: Budget) => {
  const groupedRecords = groupBy("groupCategory")(budget.categoryRecords);
  const objectToArray = (obj: any) => Object.keys(obj).map((key) => obj[key]);
  const records = objectToArray(
    groupedRecords
  ).flat() as Budget["categoryRecords"];

  return { ...budget, groupedRecords: records };
};

export const getBudgetByDate = (date: Date, budgets: Budget[]) => {
  return budgets.find((budget) => {
    return (
      budget.month === date.getMonth() + 1 && budget.year === date.getFullYear()
    );
  });
};

export const getTotal = (budget: Budget) => {
  const planned = budget.categoryRecords.reduce(
    (acc, record) => acc + record.plannedTotal,
    0
  );

  const actual = budget.categoryRecords.reduce(
    (acc, record) => acc + record.actualTotal,
    0
  );

  return { planned, actual };
};

export const getBudgetRecordStatus = (record: BudgetCategoryRecord) => {
  return {
    isOver: record.actualTotal > record.plannedTotal,
    isUnder: record.actualTotal < record.plannedTotal,
    isEqual: record.actualTotal === record.plannedTotal,
  };
};
