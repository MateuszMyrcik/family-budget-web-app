import {
  Box,
  Button,
  FormGroup,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { TransactionCategory, TransactionDetails } from "@/shared/domain";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useTransactionAction } from "@/entities/transaction";
import { Add, Delete, ShoppingBagOutlined } from "@mui/icons-material";

import { useTranslation } from "react-i18next";

export const TransactionCategoryGroup = ({
  records,
}: {
  records: TransactionCategory[];
}) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation("common");
  const hasMultipleRecords = records.length > 1;
  const { palette } = useTheme();

  const { addCategory, removeCategory } = useTransactionAction();
  const groupDetails = records[0];
  const { type, groupCategory, groupCategoryLabel } = groupDetails;

  const onSubmit = (data: any) => {
    const keys = Object.keys(data);
    const groupKey = keys[0];
    const category = data[groupKey] as string;
    const { groupCategory, groupCategoryLabel, type } = records[0];

    const newCategory: TransactionDetails = {
      category: String(category).toUpperCase(),
      categoryLabel: category,
      type,
      groupCategory,
      groupCategoryLabel,
    };

    addCategory(newCategory);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div key={groupCategory} className="expense-group">
        <Box
          sx={{
            display: "flex",
            bgcolor: palette.secondary.light,
            alignItems: "center",
            p: 1,
            height: "48px",
          }}
        >
          <ShoppingBagOutlined fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="h4"> {groupCategoryLabel}</Typography>
        </Box>
        <Box>
          {records.map((item) => (
            <Box
              key={item.category}
              sx={{
                "&:hover": {
                  backgroundColor: "grey.100",
                  cursor: "pointer",
                },
                borderBottom: `1px solid ${palette.grey[200]}`,
                padding: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="caption">{item.categoryLabel}</Typography>
              {hasMultipleRecords && (
                <Delete
                  onClick={() => removeCategory(item.id)}
                  fontSize="small"
                  sx={{
                    "&:hover": {
                      color: palette.secondary.dark,
                    },
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
        <FormGroup row sx={{ marginTop: 1 }}>
          <Controller
            name={`${type}:${groupCategoryLabel}`}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  size="small"
                  label={t("transaction.categoryLabel")}
                  variant="outlined"
                />
              );
            }}
          />
          <Button type="submit">
            <Add /> {t("transaction.addCategory")}
          </Button>
        </FormGroup>
      </div>
    </form>
  );
};
