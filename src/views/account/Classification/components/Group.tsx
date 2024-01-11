import {
  Box,
  Button,
  FormGroup,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import {
  ClassificationRecord,
  ClassificationSupportedLanguage,
} from "@/shared/domain";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema";
import { Add, Delete, Edit } from "@mui/icons-material";

import { useTranslation } from "react-i18next";
import { VitalClassificationRecord } from "@/entities/classification/types";
import { useClassificationAction } from "@/entities/classification";
import { useState } from "react";
import { EditClassificationModal } from "./EditClassificationModal";

export const ClassificationGroup = ({
  records,
}: {
  records: ClassificationRecord[];
}) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("common");
  const { palette } = useTheme();
  const currentLang = useTranslation().i18n
    .language as ClassificationSupportedLanguage;

  const { addClassificationRecord, removeClassificationRecord } =
    useClassificationAction();

  const groupDetails = records[0];
  const {
    type,
    group: { label, decorationColor },
  } = groupDetails;

  const groupCategoryLabel = label.find(
    ({ lang }) => lang === currentLang
  )?.value;

  const onSubmit = (data: any) => {
    const keys = Object.keys(data);
    const groupKey = keys[0];
    const category = data[groupKey] as string;
    const {
      group: { _id },

      type,
    } = records[0];

    const newCategory: VitalClassificationRecord = {
      type,
      groupId: _id,
      lang: currentLang,
      name: category,
    };

    addClassificationRecord(newCategory);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="expense-group">
        <Box
          sx={{
            display: "flex",
            bgcolor: decorationColor,
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            height: "48px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h4" color={palette.grey[600]}>
            {groupCategoryLabel}
          </Typography>
        </Box>
        <Box>
          {records.map((item) => {
            const recordName =
              item.labels.find(({ lang }) => lang === currentLang)?.value ?? "";

            return (
              <Box
                key={item._id}
                sx={{
                  "&:hover": {
                    backgroundColor: "grey.100",
                    cursor: "pointer",
                  },
                  borderBottom: `1px solid ${palette.grey[200]}`,
                  padding: "8px",
                  display: "flex",
                }}
              >
                <Typography variant="caption">{recordName}</Typography>
                {/* {item.isDeletable && (
                  <Delete
                    onClick={() => removeClassificationRecord(item._id)}
                    fontSize="small"
                    sx={{
                      "&:hover": {
                        color: palette.secondary.dark,
                      },
                      marginLeft: "auto",
                    }}
                  />
                )} */}
                {item.isEditable && (
                  <>
                    <Edit
                      fontSize="small"
                      onClick={handleModalOpen}
                      sx={{
                        "&:hover": {
                          color: palette.secondary.dark,
                        },
                        marginLeft: "auto",
                      }}
                    ></Edit>
                    <EditClassificationModal
                      isOpen={isModalOpen}
                      groupId={item.group._id}
                      onClose={handleModalClose}
                      recordId={item._id}
                      type={item.type}
                    ></EditClassificationModal>
                  </>
                )}
              </Box>
            );
          })}
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
                  label={t("classification.newInputLabel")}
                  variant="outlined"
                />
              );
            }}
          />
          <Button type="submit">
            <Add /> {t("classification.addButton")}
          </Button>
        </FormGroup>
      </div>
    </form>
  );
};
