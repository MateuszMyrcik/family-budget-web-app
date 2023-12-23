export {
  useAction as useClassificationAction,
  useServiceStatus as useClassificationServiceStatus,
  ClassificationReducer,
  useClassificationRecords,
  classificationSlice,
} from "./model";

export type { VitalClassificationRecord } from "./types";

export { getClassificationGroupColors } from "./lib";
