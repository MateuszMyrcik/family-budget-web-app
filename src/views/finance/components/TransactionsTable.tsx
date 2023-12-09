import { isExpense, useTransactionAction } from "@/entities/transaction";
import { useLang } from "@/hooks/useLang";
import { Transaction } from "@/shared";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { Chip, IconButton, Typography } from "@mui/material";
import { MRT_Localization_PL } from "material-react-table/locales/pl";
import { MRT_Localization_EN } from "material-react-table/locales/en";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  transactions: Transaction[];
};

export const TransactionsTable = ({ transactions }: Props) => {
  const { t } = useTranslation("common");
  const { currentLang } = useLang();
  const { push } = useRouter();
  const { removeTransaction } = useTransactionAction();
  const tableLocalization =
    currentLang === "pl" ? MRT_Localization_PL : MRT_Localization_EN;

  const columns = useMemo<MRT_ColumnDef<Transaction>[]>(
    () => [
      {
        header: t("finance.transactionName"),
        accessorKey: "name",
        sortingFn: "alphanumericCaseSensitive",
      },
      {
        header: t("finance.transactionDate"),
        accessorKey: "transactionDate",
        sortingFn: "datetime",
        Cell: ({ cell: { row } }) => {
          const transaction = row.original;
          const date = new Date(transaction.transactionDate);
          return (
            <Typography>
              {date.toLocaleDateString(currentLang, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </Typography>
          );
        },
      },
      {
        header: t("finance.transactionClassification"),
        accessorKey: "classificationRecord.group._id",
        enableSorting: false,
        Cell: ({ cell: { row } }) => {
          const transaction = row.original;
          const label =
            transaction.classificationRecord.group.label.find(
              (label) => label.lang === currentLang
            )?.value ?? "";

          return (
            <Chip
              sx={{
                backgroundColor:
                  transaction.classificationRecord.group.decorationColor,
                fontWeight: "bold",
              }}
              label={label}
            ></Chip>
          );
        },
      },
      {
        header: t("finance.transactionAmount"),
        accessorKey: "amount.value",
        Cell: ({ cell: { row } }) => {
          const transaction = row.original;
          const formattedAmountValue = new Intl.NumberFormat("pl-PL", {
            style: "currency",
            currency: "PLN",
          }).format(transaction.amount.value);
          return (
            <Typography
              sx={{
                color:
                  transaction.type === "INCOME" ? "success.main" : undefined,
              }}
            >
              {isExpense(transaction.type) && "-"}
              {formattedAmountValue}
            </Typography>
          );
        },
      },
      {
        header: t("finance.transactionAction"),
        accessorKey: "id",
        enableColumnActions: false,
        enableSorting: false,
        Cell: ({ cell: { row } }) => {
          const id = row.original.id;
          return (
            <>
              <IconButton
                onClick={() => {
                  push(`/transaction/${id}`);
                }}
              >
                <EditOutlined fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => {
                  removeTransaction(id);
                }}
              >
                <DeleteOutlineOutlined
                  fontSize="small"
                  sx={{
                    color: "error.main",
                  }}
                />
              </IconButton>
            </>
          );
        },
      },
    ],
    [t, push, removeTransaction, currentLang]
  );

  const table = useMaterialReactTable({
    columns,
    data: transactions, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: false, //enable a feature for all columns
    enableRowSelection: false, //enable some features
    enableColumnOrdering: false, //enable a feature for all columns
    enableGlobalFilter: false, //turn off a feature
    localization: tableLocalization,
    initialState: {
      sorting: [
        {
          id: "transactionDate",
          desc: true,
        },
      ],
    },
    muiTableBodyCellProps: ({ cell }) => {
      if (cell.column.id !== "name") return {};
      const transaction = cell.row.original;
      const { decorationColor } = transaction.classificationRecord.group;
      return {
        sx: {
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            top: "10%",
            left: 0,
            width: 4,
            height: "80%",
            borderRadius: 8,
            backgroundColor: decorationColor,
          },
        },
      };
    },
  });

  return <MaterialReactTable table={table} />;
};
