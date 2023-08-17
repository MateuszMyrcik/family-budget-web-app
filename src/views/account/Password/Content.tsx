import {
  Box,
  Button,
  FormGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { Controller } from "react-hook-form";
import { useRecordsForm } from "./useRecordsForm";

export const PasswordContent = () => {
  const { palette } = useTheme();
  const { control, onSubmit, handleSubmit } = useRecordsForm();
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        border: `1px solid ${palette.primary.light}`,
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          borderBottom: `1px solid ${palette.primary.light}`,
          padding: "16px",
        }}
      >
        <Typography variant="h5">
          {t("account.changePasswordHeader")}
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "20px",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            padding: "20px",
            width: "100%",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} id="change-password">
            <FormGroup>
              <Controller
                name="currentPassword"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label={t("account.currentPassword")}
                    variant="outlined"
                    type="password"
                    error={!!error}
                    helperText={error?.message || null}
                  />
                )}
              />
            </FormGroup>
            <FormGroup row>
              <Controller
                name="newPasswordOne"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label={t("account.newPassword")}
                    variant="outlined"
                    type="password"
                    error={!!error}
                    helperText={error?.message || null}
                  />
                )}
              />
              <Controller
                name="newPasswordTwo"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    type="password"
                    label={t("account.repeatNewPassword")}
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message || null}
                  />
                )}
              />
            </FormGroup>
          </form>
        </Box>

        <Box
          sx={{
            padding: "20px",
            borderTop: `1px solid ${palette.primary.light}`,
            textAlign: "right",
          }}
        >
          <Button type="submit" variant="contained" form="change-password">
            {t("account.updatePassword")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
