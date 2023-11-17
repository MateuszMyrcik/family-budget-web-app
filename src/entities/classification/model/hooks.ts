import { RootState } from "@/app/store";
import { UniqueId } from "@/shared";

import { useDispatch, useSelector } from "react-redux";
import { ServiceStatus, VitalClassificationRecord } from "../types";
import {
  addClassificationRecord,
  fetchClassification,
  removeClassificationRecord,
  updateClassificationRecord,
} from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    removeClassificationRecord: (id: UniqueId) =>
      dispatch(removeClassificationRecord(id) as any),
    fetchClassification: () => dispatch(fetchClassification() as any),
    addClassificationRecord: (record: VitalClassificationRecord) =>
      dispatch(addClassificationRecord(record) as any),
    updateClassificationRecord: (record: VitalClassificationRecord) =>
      dispatch(updateClassificationRecord(record) as any),
  };
};

export const useServiceStatus = (): ServiceStatus => {
  const slice = useSelector((state: RootState) => state.classificationSlice);
  return {
    error: slice.error,
    isIdle: slice.loading === "idle",
    isError: slice.loading === "error",
    isPending: slice.loading === "loading",
    isSuccess: slice.loading === "loaded",
  };
};

export const useClassificationRecords = () => {
  const { classificationRecords } = useSelector(
    (state: RootState) => state.classificationSlice
  );
  return { classificationRecords };
};
