import { AppBar, Sidebar } from "@/shared/ui-kit";
import { BaseTemplate } from "./BaseTemplate";
import { NAV_ITEMS } from "./constants";
import { useLayout } from "./Context";
import { SidebarContent } from "./SidebarContent";

type PrimaryTemplateProps = {
  children: React.ReactNode;
};

export const PrimaryTemplate = ({ children }: PrimaryTemplateProps) => {
  const { headerHeight, toggleSidebar, isMobileDrawerOpen } = useLayout();

  const sidebar = (
    <div className="p-4 text-sm">
      <SidebarContent items={NAV_ITEMS} />
    </div>
  );

  return (
    <BaseTemplate
      header={<AppBar links={NAV_ITEMS} onMenuIconClick={toggleSidebar} />}
      sidebar={sidebar}
    >
      <Sidebar
        top={headerHeight}
        drawerOpen={isMobileDrawerOpen}
        onDrawerClose={toggleSidebar}
      />
      <>{children}</>
    </BaseTemplate>
  );
};
