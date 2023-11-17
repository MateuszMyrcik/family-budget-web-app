import { useClassificationAction } from "@/entities/classification";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormGroup,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ModalWrapper } from "./ModalWrapper";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useLang } from "@/hooks/useLang";
import { ClassificationType } from "@/shared";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
  recordId: string;
  type: ClassificationType;
};

type EditClassificationFormData = {
  recordLabel: string;
};

const schema = yup.object().shape({
  recordLabel: yup.string().required(),
});

export const EditClassificationModal = ({
  isOpen,
  onClose,
  groupId,
  recordId,
  type,
}: Props) => {
  const { updateClassificationRecord } = useClassificationAction();
  const { currentLang } = useLang();
  const { t } = useTranslation("common");
  const { handleSubmit, control } = useForm<EditClassificationFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ recordLabel }: EditClassificationFormData) => {
    updateClassificationRecord({
      groupId,
      lang: currentLang,
      name: recordLabel,
      type,
      id: recordId,
    });
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalWrapper>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          {t("classification.editModalHeader")}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          {t("classification.editModalDescription")}
        </Typography>
        <form
          onSubmit={(e) => {
            e.stopPropagation();
            handleSubmit(onSubmit)(e);
          }}
        >
          <FormGroup>
            <Controller
              name={`recordLabel`}
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
          </FormGroup>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button onClick={onClose} variant="text" sx={{ width: 128 }}>
              {t("classification.cancelButton")}
            </Button>
            <Button type="submit" variant="contained" sx={{ width: 128 }}>
              {t("classification.saveButton")}
            </Button>
          </Box>
        </form>
      </ModalWrapper>
    </Modal>
  );
};
