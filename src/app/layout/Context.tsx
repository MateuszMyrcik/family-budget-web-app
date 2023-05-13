import { createContext, useContext, useState } from "react";

type LayoutProviderProps = { children: React.ReactNode };

const SIDEBAR_WIDTH = 256; // 16 rem
const FOOTER_HEIGHT = 0; // 0rem
const HEADER_HEIGHT = 80; // 5rem

export const LayoutContext = createContext({
  sidebarWidth: 0,
  footerHeight: 0,
  headerHeight: 0,
  toggleSidebar: () => {},
});

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const toggleSidebar = () => setSidebarWidth(sidebarWidth ? 0 : SIDEBAR_WIDTH);

  const dimensions = {
    sidebarWidth: sidebarWidth ? 256 : 0, // 16 rem
    footerHeight: FOOTER_HEIGHT, // 0rem
    headerHeight: HEADER_HEIGHT, // 5rem
  };

  return (
    <LayoutContext.Provider value={{ toggleSidebar, ...dimensions }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
