import { AppBar } from "@/shared/ui-kit";
import { ReactNode } from "react";
import { ROUTES } from "./constants";

type DefaultTemplateProps = {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
};

export const DefaultTemplate = ({
  header,
  footer,
  sidebar,
  children,
}: DefaultTemplateProps) => {
  return (
    <div>
      <AppBar links={ROUTES} />
      {header && <header>{header}</header>}

      <main>{children}</main>

      {sidebar && <aside>{sidebar}</aside>}
    </div>
  );
};
