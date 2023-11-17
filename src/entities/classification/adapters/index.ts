import {
  CreateClassificationRecordDto,
  UpdateClassificationRecordDto,
} from "@/shared";
import { VitalClassificationRecord } from "../types";

export class ClassificationAdapter {
  static toCreateClassificationRecordDto(
    record: VitalClassificationRecord
  ): CreateClassificationRecordDto {
    return {
      groupId: record.groupId,
      label: { lang: record.lang, value: record.name },
    };
  }

  static toUpdateClassificationRecordDto(
    record: VitalClassificationRecord
  ): UpdateClassificationRecordDto {
    return {
      label: { lang: record.lang, value: record.name },
    };
  }
}
