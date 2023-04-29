import { AppBar, Sidebar } from "@/shared/ui-kit";
import { BaseTemplate } from "./BaseTemplate";
import { ROUTES } from "./constants";

type PrimaryTemplateProps = {
  children: React.ReactNode;
};

export const PrimaryTemplate = ({ children }: PrimaryTemplateProps) => {
  return (
    <BaseTemplate header={<AppBar links={ROUTES} />} sidebar={<Sidebar />}>
      {children}
    </BaseTemplate>
  );
};
