import { AppBar, Sidebar } from "@/shared/ui-kit";
import { BaseTemplate } from "./BaseTemplate";
import { NAV_ITEMS } from "./constants";
import { useLayout } from "./Context";
import { Content } from "./partials";
import { SidebarContent } from "./partials/SidebarContent";

type PrimaryTemplateProps = {
  children: React.ReactNode;
};

const PrimaryTemplate = ({ children }: PrimaryTemplateProps) => {
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

PrimaryTemplate.Content = Content;

export { PrimaryTemplate };
