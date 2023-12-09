import {
  ClassificationSupportedLanguage,
  ClassificationRecord,
  TransactionType,
} from "@/shared/domain";
import { groupBy } from "rambda";

export const getSelectItems = (
  type: TransactionType,
  lang: ClassificationSupportedLanguage,
  classificationRecords: ClassificationRecord[]
) => {
  const groupedClassifications = groupBy(
    (record: ClassificationRecord) => record.group._id
  )(classificationRecords.filter((category) => type === category.type));

  const selectItems = Object.keys(groupedClassifications)
    .map((key) => {
      const groupLabel =
        groupedClassifications[key][0].group.label.find(
          (label) => label.lang === lang
        )?.value ?? "No group label";

      const id = groupedClassifications[key][0].group._id;
      const groupItem = {
        label: groupLabel,
        value: id,
        isGroupItem: true,
      };

      const options = groupedClassifications[key].map(
        (record: ClassificationRecord) => {
          return {
            value: record._id,
            label:
              record.labels.find((label) => label.lang === lang)?.value ??
              "No label",
            isGroupItem: false,
          };
        }
      );
      return [groupItem, ...options];
    })
    .flat();

  return selectItems;
};
