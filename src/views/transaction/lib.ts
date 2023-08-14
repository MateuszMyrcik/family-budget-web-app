import {
  getExpenseCategories,
  getExpenseGroupCategory,
  getIncomeCategories,
  getIncomeGroupCategory,
  isExpense,
  isExpenseTransaction,
} from "@/entities/transaction";
import {
  EXPENSE_CATEGORY,
  EXPENSE_GROUP_CATEGORIES,
  EXPENSE_GROUP_CATEGORY_LABEL,
  INCOME_GROUP_CATEGORIES,
  INCOME_GROUP_CATEGORY_LABEL,
  Transaction,
  TransactionType,
  TRANSACTION_TYPE,
} from "@/shared/domain";
import { expenseSchema } from "./schema";

export const getExpenseSelectItems = () => {
  const expenseGroups = EXPENSE_GROUP_CATEGORIES.map((group) => {
    const groupItem = {
      label: EXPENSE_GROUP_CATEGORY_LABEL[group],
      value: group,
      isPlaceholder: true,
    };

    const groupCategories = getExpenseCategories().filter(
      (category) => getExpenseGroupCategory(category.value) === group
    );
    return [groupItem, ...groupCategories];
  });

  return expenseGroups.flat();
};

export const getIncomeSelectItems = () => {
  const incomeGroups = INCOME_GROUP_CATEGORIES.map((group) => {
    const groupPlaceholder = {
      label: INCOME_GROUP_CATEGORY_LABEL[group],
      value: group,
      isPlaceholder: true,
    };
    const groupCategories = getIncomeCategories().filter(
      (category) => getIncomeGroupCategory(category.value) === group
    );

    return [groupPlaceholder, ...groupCategories];
  });
  return incomeGroups.flat();
};

export const getSelectItems = (type: TransactionType) => {
  return isExpense(type) ? getExpenseSelectItems() : getIncomeSelectItems();
};

export const getEmptyTransaction = (): Transaction => ({
  id: "",
  name: "",
  amount: {
    value: 0,
    currency: "PLN",
  },
  date: new Date(),
  type: TRANSACTION_TYPE.EXPENSE,
  category: EXPENSE_CATEGORY.OTHER,
  groupCategory: EXPENSE_CATEGORY.OTHER,
  ownership: {
    ownerId: "",
    familyId: "",
  },
  comment: "",
});

export const normalizeTransaction = (
  rawFormValues: Partial<Transaction>
): Transaction | null => {
  const isValid = expenseSchema.isValidSync(rawFormValues);
  if (!isValid) {
    return null;
  }
  const formValues = rawFormValues as Transaction;

  const { type, category } = formValues as Transaction;

  const mockedFamilyId = "1";
  const mockedOwnerId = "1";

  const details =
    type === TRANSACTION_TYPE.EXPENSE
      ? {
          type: TRANSACTION_TYPE.EXPENSE,
          category: category,
          groupCategory: getExpenseGroupCategory(category),
        }
      : {
          type: TRANSACTION_TYPE.INCOME,
          category: category,
          groupCategory: getIncomeGroupCategory(category),
        };

  return {
    ...formValues,
    ...details,
    ownership: {
      familyId: mockedFamilyId,
      ownerId: mockedOwnerId,
    },
    amount: {
      currency: "PLN",
      value: formValues.amount.value,
    },
  };
};
