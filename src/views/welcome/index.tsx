import { RootState, store } from "@/app/store";
import { fetchUserInfo } from "@/entities/user/model/slice";
import { Button } from "@/shared/ui-kit";
import { EmojiEmotionsOutlined } from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { Provider, useDispatch, useSelector } from "react-redux";

export const WelcomeView = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const loadingStatus = useSelector(
    (state: RootState) => state.userSlice.loading
  );
  const error = useSelector((state: RootState) => state.userSlice.error);

  const onSubmit = (data: any) => {
    //TODO: add call to be
    console.log(data);
  };

  useEffect(() => {
    if (loadingStatus === "idle") {
      dispatch(fetchUserInfo() as any);
    }
  }, [loadingStatus, dispatch]);

  if (loadingStatus === "loading") return <p>Loading...</p>;
  if (loadingStatus === "error") return <p>Error: {error}</p>;

  return (
    <Provider store={store}>
      <Box sx={{ background: `#E3F2FD`, width: "100vw", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            boxShadow={0}
            borderRadius={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              minHeight: "496px",
              width: "496px",
              padding: 4,
            }}
          >
            <Typography variant="h2" marginBottom={2} textAlign={"center"}>
              Witaj <EmojiEmotionsOutlined />{" "}
            </Typography>

            <Typography
              variant="subtitle1"
              textAlign={"center"}
              marginBottom={4}
            >
              Wyglada na to ze nie jestes czlonkiem zadnej grupy domowej. Mozesz
              dolaczyc do istniejacej lub stworzyc nowa.{" "}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-between",
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexShrink: 0,
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">Wlasciciel grupy</Typography>
                    </Box>
                    <Controller
                      control={control}
                      name="ownerEmail"
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          label={"Email"}
                          error={!!error}
                          variant="outlined"
                          fullWidth
                          helperText={error?.message || null}
                          {...field}
                        />
                      )}
                    ></Controller>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ minWidth: "300px", textTransform: "none" }}
                    >
                      Dolacz do grupy domowej
                    </Button>
                  </Box>
                </FormGroup>
              </form>
              <Divider>
                <Chip
                  variant="outlined"
                  label={"lub"}
                  className="font-medium uppercase w-24"
                />
              </Divider>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{ minWidth: "300px" }}
                  onClick={console.log}
                >
                  Stworz nowa grupe domowa
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Provider>
  );
};
