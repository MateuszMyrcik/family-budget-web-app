import { Logout, Settings, SettingsOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemAvatar,
  ListItemIcon,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  initials: string;
};

export const UserMenu = ({ initials }: Props) => {
  const { t } = useTranslation("common");
  const { push } = useRouter();
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          "&:hover": {
            background: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 1,
            height: 48,
            borderRadius: "9999px",
            cursor: "pointer",
            mr: 0,
            ml: "auto",
            gap: 2,
            backgroundColor: palette.primary.light,
            color: palette.primary.dark,
            "&:hover": {
              background: palette.primary.dark,
              color: palette.primary.light,
            },
          }}
        >
          <Avatar className="h-9 w-9">{initials}</Avatar>
          <SettingsOutlined fontSize="small" className="" />
        </Box>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
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
        <MenuItem onClick={handleClose} disabled>
          <ListItemAvatar sx={{ minWidth: 36 }}>
            <Avatar sx={{ width: 20, height: 20 }} />
          </ListItemAvatar>
          {t("global.navItem.profile")}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
            push("/account");
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {t("global.navItem.settings")}
        </MenuItem>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/auth/logout">
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {t("global.navItem.logout")}
          </MenuItem>
        </a>
      </Menu>
    </>
  );
};
