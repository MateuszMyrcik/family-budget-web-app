import { Drawer } from "@mui/material";

export interface SidebarProps {
  top?: number;
  drawerOpen: boolean;
  onDrawerClose?: () => void;
}

export const Sidebar = ({ drawerOpen, onDrawerClose }: SidebarProps) => {
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
          },
        }}
      >
        <div className="flex flex-col h-full">Sample drawer content</div>
      </Drawer>
    </>
  );
};
