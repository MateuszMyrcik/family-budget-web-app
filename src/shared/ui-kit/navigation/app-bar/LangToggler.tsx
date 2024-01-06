import { TranslateTwoTone } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export const LangToggler = () => {
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { pathname, asPath, query, push } = useRouter();

  const handleLanguageChange = (langValue: string) => {
    push({ pathname, query }, asPath, { locale: langValue });
  };

  return (
    <>
      <Box onClick={handleOpen}>
        <Avatar
          sx={{
            width: 34,
            height: 34,
            borderRadius: 2,
            backgroundColor: palette.secondary.light,
            color: palette.secondary.dark,
            "&:hover": {
              background: palette.secondary.dark,
              color: palette.secondary.light,
            },
          }}
        >
          <TranslateTwoTone sx={{ width: 20, height: 20 }} />
        </Avatar>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="lang-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleLanguageChange("pl");
          }}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <Typography variant="body1">Polski</Typography>
          <Typography variant="caption">(Polish)</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleLanguageChange("en");
          }}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <Typography variant="body1">English</Typography>
          <Typography variant="caption">(UK)</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
