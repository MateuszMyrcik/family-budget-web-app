import { EXPENSE_CATEGORY } from "@/shared/domain";
import { Expense } from "@/shared/domain/types/shared";

export const MOCKED_EXPENSES: Expense[] = [
  {
    id: "1",
    groupCategory: "FOOD",
    category: EXPENSE_CATEGORY.FOOD,
    name: "Weekly grocery shopping",
    amount: { currency: "USD", value: 100 },
    ownership: { ownerId: "1", familyId: "1" },
    date: new Date(),
  },
  {
    id: "2",

    groupCategory: "TRANSPORT",
    category: EXPENSE_CATEGORY.TAKEAWAY,
    name: "Car fuel",
    amount: { currency: "USD", value: -50 },
    ownership: { ownerId: "2", familyId: "1" },
    date: new Date(),
  },
  {
    id: "3",
    groupCategory: "HOUSING",
    category: EXPENSE_CATEGORY.CINEMA,
    name: "Monthly rent",
    amount: { currency: "USD", value: 1500 },
    ownership: { ownerId: "1", familyId: "1" },
    date: new Date(),
  },
  {
    id: "4",
    groupCategory: "ENTERTAINMENT",
    category: EXPENSE_CATEGORY.CINEMA,
    name: "Concert tickets for two",
    amount: { currency: "USD", value: -200 },
    ownership: { ownerId: "2", familyId: "1" },
    date: new Date(),
  },
  {
    id: "5",
    groupCategory: "OTHER_EXPENSES",
    category: EXPENSE_CATEGORY.OTHER,
    name: "Monthly subscriptions",
    amount: { currency: "USD", value: 50 },
    ownership: { ownerId: "1", familyId: "1" },
    date: new Date(),
  },
];
