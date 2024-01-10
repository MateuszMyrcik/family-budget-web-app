import { createContext, useContext, useEffect, useState } from "react";
import { useMedia } from "react-use";

type LayoutProviderProps = { children: React.ReactNode };

const SIDEBAR_WIDTH = 256; // 16 rem
const FOOTER_HEIGHT = 0; // 0rem
const HEADER_HEIGHT = 80; // 5rem

export const LayoutContext = createContext({
  sidebarWidth: 0,
  footerHeight: 0,
  headerHeight: 0,
  toggleSidebar: () => {},
  isMobileDrawerOpen: false,
});

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const isMobile = useMedia("(max-width: 768px)"); // TODO: use theme breakpoints

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarWidth(0);
      setIsMobileDrawerOpen(!isMobileDrawerOpen);
      return;
    } else {
      setSidebarWidth(sidebarWidth ? 0 : SIDEBAR_WIDTH);
      setIsMobileDrawerOpen(false);
    }
  };

  const dimensions = {
    sidebarWidth: sidebarWidth ? 256 : 0, // 16 rem
    footerHeight: FOOTER_HEIGHT, // 0rem
    headerHeight: HEADER_HEIGHT, // 5rem
  };

  useEffect(() => {
    if (isMobile) {
      setSidebarWidth(0);
    } else {
      setSidebarWidth(SIDEBAR_WIDTH);
    }
  }, [isMobile]);

  return (
    <LayoutContext.Provider
      value={{ toggleSidebar, isMobileDrawerOpen, ...dimensions }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
