import * as React from "react";
import { AppBar as MuiAppBar, Box } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";
import { UserMenu } from "./UserMenu";
import { LangToggler } from "./LangToggler";

export type AppBarProps = {
  onMenuIconClick?: () => void;
  initials: string;
};

export const AppBar = ({ onMenuIconClick, initials }: AppBarProps) => {
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
      <div className=" flex justify-between md:grid  md:grid-cols-[150px_1fr_150px] items-center">
        <div className="flex items-center">
          <button
            onClick={onMenuIconClick}
            className="flex items-center justify-center bg-secondary-light w-8 h-8 rounded-md text-primary  hover:bg-secondary-dark hover:text-white"
          >
            <MenuIcon fontSize="small"></MenuIcon>
          </button>
        </div>

        <div className="hidden md:flex justify-center ">
          <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />
        </div>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LangToggler />

          <UserMenu initials={initials} />
        </Box>
      </div>
    </MuiAppBar>
  );
};
