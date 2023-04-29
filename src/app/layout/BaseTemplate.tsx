import clsx from "clsx";
import { ReactNode } from "react";

type DefaultTemplateProps = {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
};

export const BaseTemplate = ({
  header,
  footer,
  sidebar,
  children,
}: DefaultTemplateProps) => {
  const state = {
    withSidebar: sidebar,
    withHeader: header,
    withFooter: footer,
  };

  const classes = {
    sidebar: clsx(
      state.withSidebar &&
        "fixed top-[var(--header-height)] h-[calc(100vh-var(--header-height))] bg-white"
    ),
    content: clsx(
      state.withSidebar && "ml-[var(--sidebar-width)]",
      state.withHeader && "mt-[var(--header-height)]"
    ),
    contentInner:
      "p-6 mr-6 bg-primary-light min-h-[calc(100vh-var(--header-height))] rounded-2xl",
  };

  return (
    <div>
      {header && <header>{header}</header>}
      {sidebar && <aside className={classes.sidebar}>{sidebar}</aside>}
      <main className={classes.content}>
        <div className={classes.contentInner}>{children}</div>
      </main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};
