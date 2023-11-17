import {
  ClassificationRecord,
  ClassificationSupportedLanguage,
  ClassificationType,
  UniqueId,
} from "@/shared";

export type ClassificationState = {
  classificationRecords: ClassificationRecord[];
  error: string | null;
  loading: "idle" | "loading" | "loaded" | "error";
};

export type VitalClassificationRecord = {
  id?: string;
  name: string;
  type: ClassificationType;
  lang: ClassificationSupportedLanguage;
  groupId: UniqueId;
};

export type ClassificationReducers = {};

export type ServiceStatus = {
  isIdle: boolean;
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  error: string | null;
};
