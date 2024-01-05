import { BudgetRecord } from "@/shared/domain";

export const getTotal = (records: BudgetRecord[]) => {
  const planned = records.reduce((acc, record) => acc + record.plannedTotal, 0);

  const actual = records.reduce((acc, record) => acc + record.actualTotal, 0);

  return { planned, actual };
};

export const getBudgetRecordStatus = (record: BudgetRecord) => {
  return {
    isOver: record.actualTotal > record.plannedTotal,
    isUnder: record.actualTotal < record.plannedTotal,
    isEqual: record.actualTotal === record.plannedTotal,
  };
};
