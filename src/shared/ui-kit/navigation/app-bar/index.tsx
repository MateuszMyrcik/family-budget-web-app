import * as React from "react";
import { AppBar as MuiAppBar } from "@mui/material";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";

import { NavLink } from "../types";
import { SettingsOutlined } from "@mui/icons-material";
import Image from "next/image";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export type AppBarProps = {
  links: NavLink[];
  onMenuIconClick?: () => void;
};

export const AppBar = ({ links, onMenuIconClick }: AppBarProps) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MuiAppBar position="fixed" className="bg-white text-primary shadow-none">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />

          {/* // TODO: possible bellow components will be reused in diffrent places */}
          <button
            onClick={onMenuIconClick}
            className="flex items-center justify-center bg-secondary-light w-8 h-8 rounded-md text-primary  hover:bg-secondary-dark hover:text-white"
          >
            <MenuIcon fontSize="small"></MenuIcon>
          </button>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <div className=" cursor-pointer mr-0 ml-auto h-12 p-2 gap-4 rounded-full flex items-center bg-primary-light hover:bg-primary-main text-primary-main hover:text-primary-light">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                className="h-9 w-9"
                alt="Remy Sharp"
                src="/images/thor-avatar.jpeg"
              />
            </IconButton>
            <SettingsOutlined fontSize="small" className="" />

            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </div>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
