import { useLayout } from "@/app/layout";
import { Drawer } from "@mui/material";

export interface SidebarProps {
  open: boolean;
  width: number;
  top: number;
}

export const Sidebar = ({ open, width, top }: SidebarProps) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      className="bg-white"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          borderRight: "none",
          top: `${top}px`,
        },
      }}
    >
      <div className="flex flex-col h-full">Sample drawer content</div>
    </Drawer>
  );
};
