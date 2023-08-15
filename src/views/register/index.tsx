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
import Image from "next/image";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { Provider } from "react-redux";
import { useRecordsForm } from "./useRecordsForm";

export const RegisterView = () => {
  const { palette } = useTheme();
  const { control, onSubmit, handleSubmit } = useRecordsForm();

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
                  Rejestracja
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
                Wprowadź dane, aby kontynuować
              </Typography>
            </div>
            <div className="bg-grey-50 font-medium text-grey-600 p-2 text-center items-center h-10 cursor-not-allowed">
              <Google className="mr-2" />
              Kontynuuj z google
            </div>

            <Divider>
              <Chip
                variant="outlined"
                label="Albo"
                className="font-medium uppercase w-24"
              />
            </Divider>

            <div className="text-gray-600 text-sm text-center">
              Zarejestruj się za pomocą adresu e-mail
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup row>
                <Controller
                  control={control}
                  name="firstName"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      label="Imię"
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
                      label="Nazwisko"
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
                      label="Adres e-mail"
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
                      label="Hasło"
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
                    Zarejestruj się
                  </Button>
                </Box>
              </FormGroup>
            </form>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={"/login"}>
                <Typography variant="subtitle2"> Masz juz konto?</Typography>
              </Link>
            </Box>
          </div>
        </div>
      </Provider>
    </>
  );
};
