import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ModalWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#fff",
        transform: "translate(-50%, -50%)",
        minWidth: "420px",
        borderRadius: "8px",
        boxShadow: 24,
        p: 4,
      }}
    >
      {children}
    </Box>
  );
};
