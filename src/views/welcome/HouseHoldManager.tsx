import { useUserAction } from "@/entities/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmojiEmotionsOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormGroup,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  ownerEmail: yup.string().email().required(),
});

export const HouseholdManager = () => {
  const { createHousehold, joinHousehold } = useUserAction();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      ownerEmail: "",
    },
    resolver: yupResolver(schema),
  });

  const handleCreateHousehold = () => createHousehold();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    joinHousehold(data.ownerEmail);
  };

  return (
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

      <Typography variant="subtitle1" textAlign={"center"} marginBottom={4}>
        Wyglada na to ze nie jestes czlonkiem zadnej grupy domowej. Mozesz
        dolaczyc do istniejacej lub stworzyc nowa.{" "}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup sx={{ padding: 0 }}>
            <Box>
              <Controller
                control={control}
                name="ownerEmail"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <InputLabel>Wlasciciel grupy</InputLabel>
                    <TextField
                      error={!!error}
                      InputLabelProps={{ title: "Wlasciciel grupy" }}
                      variant="outlined"
                      fullWidth
                      helperText={
                        error?.message || "Wprowadz email wlasciciela grupy"
                      }
                      {...field}
                    />
                  </>
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
            onClick={handleCreateHousehold}
          >
            Stworz nowa grupe domowa
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
