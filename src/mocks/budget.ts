import { Budget } from "@/shared/domain";

export const EMPTY_MOCKED_BUDGET: Budget = {
  id: Date.now().toString(),
  month: 0,
  year: 0,
  categoryRecords: [
    {
      category: "ALCOHOL",
      categoryLabel: "Alcohol",
      groupCategory: "SHOPPING",
      groupCategoryLabel: "Shopping",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "FOOD",
      categoryLabel: "Food",
      groupCategory: "SHOPPING",
      groupCategoryLabel: "Shopping",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "RENT",
      categoryLabel: "Rent",
      groupCategory: "HOUSING",
      groupCategoryLabel: "Housing",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "UTILITIES",
      categoryLabel: "Utilities",
      groupCategory: "HOUSING",
      groupCategoryLabel: "Housing",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "MAINTENANCE",
      categoryLabel: "Maintenance",
      groupCategory: "HOUSING",
      groupCategoryLabel: "Housing",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "PUBLIC_TRANSPORT",
      categoryLabel: "Public transport",
      groupCategory: "TRANSPORT",
      groupCategoryLabel: "Transport",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "FUEL",
      categoryLabel: "Fuel",
      groupCategory: "TRANSPORT",
      groupCategoryLabel: "Transport",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "CAR",
      categoryLabel: "Car",
      groupCategory: "TRANSPORT",
      groupCategoryLabel: "Transport",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "DOCTOR",
      categoryLabel: "Doctor",
      groupCategory: "HEALTHCARE",
      groupCategoryLabel: "Healthcare",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "PHARMACY",
      categoryLabel: "Pharmacy",
      groupCategory: "HEALTHCARE",
      groupCategoryLabel: "Healthcare",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "GYM",
      categoryLabel: "Gym",
      groupCategory: "ENTERTAINMENT",
      groupCategoryLabel: "Entertainment",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "CINEMA",
      categoryLabel: "Cinema",
      groupCategory: "ENTERTAINMENT",
      groupCategoryLabel: "Entertainment",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "BOOKS",
      categoryLabel: "Books",
      groupCategory: "ENTERTAINMENT",
      groupCategoryLabel: "Entertainment",
      actualTotal: 0,
      plannedTotal: 0,
    },
    {
      category: "OTHER",
      categoryLabel: "Other",
      groupCategory: "OTHER",
      groupCategoryLabel: "Other",
      actualTotal: 0,
      plannedTotal: 0,
    },
  ],
};

export const MOCKED_BUDGET: Budget[] = [
  {
    id: "1",
    month: 8,
    year: 2023,
    categoryRecords: [
      {
        category: "ALCOHOL",
        categoryLabel: "Alcohol",
        groupCategory: "SHOPPING",
        groupCategoryLabel: "Shopping",
        actualTotal: 50,
        plannedTotal: 190,
      },
      {
        category: "FOOD",
        categoryLabel: "Food",
        groupCategory: "SHOPPING",
        groupCategoryLabel: "Shopping",
        actualTotal: 50,
        plannedTotal: 190,
      },
      {
        category: "RENT",
        categoryLabel: "Rent",
        groupCategory: "HOUSING",
        groupCategoryLabel: "Housing",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "UTILITIES",
        categoryLabel: "Utilities",
        groupCategory: "HOUSING",
        groupCategoryLabel: "Housing",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "MAINTENANCE",
        categoryLabel: "Maintenance",
        groupCategory: "HOUSING",
        groupCategoryLabel: "Housing",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "PUBLIC_TRANSPORT",
        categoryLabel: "Public transport",
        groupCategory: "TRANSPORT",
        groupCategoryLabel: "Transport",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "FUEL",
        categoryLabel: "Fuel",
        groupCategory: "TRANSPORT",
        groupCategoryLabel: "Transport",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "CAR",
        categoryLabel: "Car",
        groupCategory: "TRANSPORT",
        groupCategoryLabel: "Transport",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "DOCTOR",
        categoryLabel: "Doctor",
        groupCategory: "HEALTHCARE",
        groupCategoryLabel: "Healthcare",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "PHARMACY",
        categoryLabel: "Pharmacy",
        groupCategory: "HEALTHCARE",
        groupCategoryLabel: "Healthcare",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "GYM",
        categoryLabel: "Gym",
        groupCategory: "ENTERTAINMENT",
        groupCategoryLabel: "Entertainment",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "CINEMA",
        categoryLabel: "Cinema",
        groupCategory: "ENTERTAINMENT",
        groupCategoryLabel: "Entertainment",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "BOOKS",
        categoryLabel: "Books",
        groupCategory: "ENTERTAINMENT",
        groupCategoryLabel: "Entertainment",
        actualTotal: 50,
        plannedTotal: 120,
      },
      {
        category: "OTHER",
        categoryLabel: "Other",
        groupCategory: "OTHER",
        groupCategoryLabel: "Other",
        actualTotal: 110,
        plannedTotal: 120,
      },
    ],
  },
  {
    id: "2",
    month: 7,
    year: 2023,
    categoryRecords: [
      {
        category: "ALCOHOL",
        categoryLabel: "Alcohol",
        groupCategory: "SHOPPING",
        groupCategoryLabel: "Shopping",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "FOOD",
        categoryLabel: "Food",
        groupCategory: "SHOPPING",
        groupCategoryLabel: "Shopping",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "RENT",
        categoryLabel: "Rent",
        groupCategory: "HOUSING",
        groupCategoryLabel: "Housing",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "UTILITIES",
        categoryLabel: "Utilities",
        groupCategory: "HOUSING",
        groupCategoryLabel: "Housing",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "MAINTENANCE",
        categoryLabel: "Maintenance",
        groupCategory: "HOUSING",
        groupCategoryLabel: "Housing",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "PUBLIC_TRANSPORT",
        categoryLabel: "Public transport",
        groupCategory: "TRANSPORT",
        groupCategoryLabel: "Transport",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "FUEL",
        categoryLabel: "Fuel",
        groupCategory: "TRANSPORT",
        groupCategoryLabel: "Transport",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "CAR",
        categoryLabel: "Car",
        groupCategory: "TRANSPORT",
        groupCategoryLabel: "Transport",
        actualTotal: 110,
        plannedTotal: 120,
      },
      {
        category: "DOCTOR",
        categoryLabel: "Doctor",
        groupCategory: "HEALTHCARE",
        groupCategoryLabel: "Healthcare",
        actualTotal: 110,
        plannedTotal: 190,
      },
      {
        category: "PHARMACY",
        categoryLabel: "Pharmacy",
        groupCategory: "HEALTHCARE",
        groupCategoryLabel: "Healthcare",
        actualTotal: 110,
        plannedTotal: 190,
      },
      {
        category: "GYM",
        categoryLabel: "Gym",
        groupCategory: "ENTERTAINMENT",
        groupCategoryLabel: "Entertainment",
        actualTotal: 110,
        plannedTotal: 190,
      },
      {
        category: "CINEMA",
        categoryLabel: "Cinema",
        groupCategory: "ENTERTAINMENT",
        groupCategoryLabel: "Entertainment",
        actualTotal: 110,
        plannedTotal: 190,
      },
      {
        category: "BOOKS",
        categoryLabel: "Books",
        groupCategory: "ENTERTAINMENT",
        groupCategoryLabel: "Entertainment",
        actualTotal: 110,
        plannedTotal: 190,
      },
      {
        category: "OTHER",
        categoryLabel: "Other",
        groupCategory: "OTHER",
        groupCategoryLabel: "Other",
        actualTotal: 110,
        plannedTotal: 190,
      },
    ],
  },
];
