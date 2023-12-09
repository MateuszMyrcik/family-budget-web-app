import { Frequency } from "@/shared";

export type FormValues = {
  type: string;
  name: string;
  date: Date | null;
  classificationRecordId: string;
  comments: string;
  amount: {
    value: number;
    currency?: string;
  };
  isCyclic: boolean;
  occurrences: number;
  startDate: Date;
  frequency: Frequency;
};
