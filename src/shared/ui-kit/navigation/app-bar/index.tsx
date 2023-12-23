import * as React from "react";
import { AppBar as MuiAppBar } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

import { SettingsOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export type AppBarProps = {
  onMenuIconClick?: () => void;
};

export const AppBar = ({ onMenuIconClick }: AppBarProps) => {
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
    <MuiAppBar
      position="fixed"
      sx={{
        position: "fixed",
        backgroundColor: "white",
        color: "primary",
        zIndex: 800,
        px: 4,
        boxShadow: "none",
      }}
    >
      <div className="grid grid-cols-[100px_1fr_100px] items-center">
        {/* // TODO: possible bellow components will be reused in diffrent places */}
        <div className="flex items-center">
          <button
            onClick={onMenuIconClick}
            className="flex items-center justify-center bg-secondary-light w-8 h-8 rounded-md text-primary  hover:bg-secondary-dark hover:text-white"
          >
            <MenuIcon fontSize="small"></MenuIcon>
          </button>
        </div>

        <div className="flex justify-center">
          <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />
        </div>

        <Link href="/account">
          <div className="flex items-center cursor-pointer mr-0 ml-auto h-12 p-2 gap-4 rounded-full bg-primary-light hover:bg-primary-main text-primary-main hover:text-primary-light">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                className="h-9 w-9"
                alt="Avatar"
                src="/images/thor-avatar.jpeg"
              />
            </IconButton>
            <SettingsOutlined fontSize="small" className="" />
          </div>
        </Link>
      </div>
    </MuiAppBar>
  );
};
