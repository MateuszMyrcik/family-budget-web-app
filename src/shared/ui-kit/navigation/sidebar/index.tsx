import { getNavItems } from "@/app/layout/lib";
import { SidebarContent } from "@/app/layout/partials";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface SidebarProps {
  top?: number;
  drawerOpen: boolean;
  onDrawerClose?: () => void;
}

export const Sidebar = ({ drawerOpen, onDrawerClose }: SidebarProps) => {
  const items = getNavItems();

  return (
    <>
      <Drawer
        anchor="left"
        variant="temporary"
        open={drawerOpen}
        onClose={onDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            borderRight: "none",
            width: "80%",
          },
        }}
      >
        <Box sx={{ padding: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80px",
              mb: 4,
            }}
          >
            <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />
            <Typography variant="h4">Family budget</Typography>
          </Box>
          {items.map(({ label, path, prefix }) => (
            <>
              <Box
                sx={{
                  padding: 1,
                  my: 1,
                }}
              >
                <Link
                  className="w-full block"
                  href={path}
                  onClick={() => onDrawerClose?.()}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      fontWeight: "bold",
                    }}
                  >
                    {prefix}
                    <span>{label}</span>
                  </Typography>
                </Link>
              </Box>
              <Divider />
            </>
          ))}
        </Box>
      </Drawer>
    </>
  );
};
