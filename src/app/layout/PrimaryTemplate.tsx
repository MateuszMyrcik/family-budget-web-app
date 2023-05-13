import { AppBar, Sidebar } from "@/shared/ui-kit";
import { BaseTemplate } from "./BaseTemplate";
import { ROUTES } from "./constants";
import { useLayout } from "./Context";

type PrimaryTemplateProps = {
  children: React.ReactNode;
};

export const PrimaryTemplate = ({ children }: PrimaryTemplateProps) => {
  const { sidebarWidth, headerHeight, toggleSidebar } = useLayout();
  return (
    <BaseTemplate
      header={<AppBar links={ROUTES} onMenuIconClick={toggleSidebar} />}
      sidebar={
        <Sidebar
          top={headerHeight}
          width={sidebarWidth}
          open={!!sidebarWidth}
        />
      }
    >
      {children}
    </BaseTemplate>
  );
};
