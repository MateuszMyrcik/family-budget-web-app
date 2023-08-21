import { AppBar, Sidebar } from "@/shared/ui-kit";
import { BaseTemplate } from "./BaseTemplate";
import { useLayout } from "./Context";
import { getNavItems } from "./lib";
import { Content } from "./partials";
import { SidebarContent } from "./partials/SidebarContent";

type PrimaryTemplateProps = {
  children: React.ReactNode;
};

const PrimaryTemplate = ({ children }: PrimaryTemplateProps) => {
  const { headerHeight, toggleSidebar, isMobileDrawerOpen } = useLayout();
  const navItems = getNavItems();

  const sidebar = (
    <div className="p-4 text-sm">
      <SidebarContent items={navItems} />
    </div>
  );

  return (
    <BaseTemplate
      header={<AppBar onMenuIconClick={toggleSidebar} />}
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

PrimaryTemplate.Content = Content;

export { PrimaryTemplate };
