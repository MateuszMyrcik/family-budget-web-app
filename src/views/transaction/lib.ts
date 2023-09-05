import { TransactionCategory, TransactionType } from "@/shared/domain";
import { groupBy } from "@/shared/utils";


export const getSelectItems = (
  type: TransactionType,
  categories: TransactionCategory[]
) => {
  const groupedCategories = groupBy("groupCategory")(
    categories.filter((category) => type === category.type)
  );

  const selectItems = Object.keys(groupedCategories)
    .map((key) => {
      const groupItem = {
        label: groupedCategories[key][0].groupCategoryLabel,
        value: key,
        isGroupItem: true,
      };

      const options = groupedCategories[key].map(
        (category: TransactionCategory) => {
          return {
            value: category.category,
            label: category.categoryLabel,
            isGroupItem: false,
          };
        }
      );
      return [groupItem, ...options];
    })
    .flat();

  return selectItems;
};
