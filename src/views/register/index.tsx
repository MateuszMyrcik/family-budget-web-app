import { store } from "@/app/store";
import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { Provider } from "react-redux";
import { useRecordsForm } from "./useRecordsForm";

export const RegisterView = () => {
  const { palette } = useTheme();
  const { control, onSubmit, handleSubmit } = useRecordsForm();
  const { t } = useTranslation("common");

  return (
    <>
      <Provider store={store}>
        <div className="bg-blue-50 min-h-screen flex justify-center items-center">
          <div className="p-10 w-[508px] bg-white flex flex-col gap-5 rounded-md shadow-md">
            <div>
              <div className="flex place-content-between">
                <Typography
                  variant="h3"
                  fontSize={24}
                  color={palette.secondary.main}
                  fontWeight={700}
                >
                  {t("register.formHeader")}
                </Typography>
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </div>

              <Typography
                variant="body1"
                font-size={16}
                color={palette.grey["500"]}
              >
                {t("register.formSubheader")}
              </Typography>
            </div>
            <div className="bg-grey-50 font-medium text-grey-600 p-2 text-center items-center h-10 cursor-not-allowed">
              <Google className="mr-2" />
              {t("register.googleButton")}
            </div>

            <Divider>
              <Chip
                variant="outlined"
                label={t("register.formSeparator")}
                className="font-medium uppercase w-24"
              />
            </Divider>

            <div className="text-gray-600 text-sm text-center">
              {t("register.formOrLabel")}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup row>
                <Controller
                  control={control}
                  name="firstName"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      label={t("register.nameLabel")}
                      error={!!error}
                      variant="outlined"
                      className="w-full sm:flex-1"
                      helperText={error?.message || null}
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="lastName"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      error={!!error}
                      label={t("register.surnameLabel")}
                      variant="outlined"
                      className="w-full sm:flex-1"
                      helperText={error?.message || null}
                      {...field}
                    />
                  )}
                />
              </FormGroup>
              <FormGroup className="flex flex-col gap-6">
                <Controller
                  control={control}
                  name="email"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      label={t("register.emailLabel")}
                      variant="outlined"
                      error={!!error}
                      helperText={error?.message || null}
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="password"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      label={t("register.passwordLabel")}
                      variant="outlined"
                      type="password"
                      error={!!error}
                      helperText={error?.message || null}
                      {...field}
                    />
                  )}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{ flex: 1, textTransform: "none" }}
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    {t("register.registerButton")}
                  </Button>
                </Box>
              </FormGroup>
            </form>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={"/login"}>
                <Typography variant="subtitle2">
                  {t("register.haveAccountLink")}
                </Typography>
              </Link>
            </Box>
          </div>
        </div>
      </Provider>
    </>
  );
};
