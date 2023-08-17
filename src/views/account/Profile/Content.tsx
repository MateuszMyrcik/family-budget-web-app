import { RootState } from "@/app/store";
import {
  Avatar,
  Box,
  Button,
  FormGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useRecordsForm } from "./useRecordsForm";

export const ProfileContent = () => {
  const { user } = useSelector((state: RootState) => state.userSlice);
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
        <Typography variant="h5">{t("account.profileTabHeader")}</Typography>
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
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} id="personal-details">
            {user.avatar && (
              <Avatar
                alt={user.avatar.alt}
                src={user.avatar.url}
                sx={{ marginBottom: "24px" }}
              />
            )}
            <FormGroup row>
              <Controller
                name="name"
                control={control}
                defaultValue={user.name}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={t("account.name")}
                    {...field}
                    error={!!error}
                    helperText={error?.message || null}
                  />
                )}
              />
              <Controller
                name="surname"
                control={control}
                defaultValue={user.surname}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={t("account.surname")}
                    {...field}
                    error={!!error}
                    helperText={error?.message || null}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue={user.email}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    label={t("account.email")}
                    {...field}
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
          <Button
            type="submit"
            variant="contained"
            form="personal-details"
            disabled
          >
            {t("account.updateProfile")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
