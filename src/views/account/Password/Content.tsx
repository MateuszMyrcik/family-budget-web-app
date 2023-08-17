import {
  Box,
  Button,
  FormGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useRecordsForm } from "./useRecordsForm";

export const PasswordContent = () => {
  const { palette } = useTheme();
  const { control, onSubmit, handleSubmit } = useRecordsForm();

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
        <Typography variant="h5">Zmień hasło</Typography>
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
                    label="Aktualne hasło"
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
                    label="Nowe hasło"
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
                    label="Nowe hasło"
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
            Zmień hasło
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
