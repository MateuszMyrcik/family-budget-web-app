import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";
import { useLayout } from "./Context";

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
  const { headerHeight, sidebarWidth } = useLayout();

  const state = {
    withSidebar: sidebar,
    withHeader: header,
    withFooter: footer,
  };

  const classes = {
    sidebar: clsx(state.withSidebar && "fixed  bg-white"),
    contentInner: "p-6 mx-6 bg-primary-light min-h-full flex rounded-2xl",
  };

  const inlineStyles: Record<string, CSSProperties> = {
    sidebar: {
      transform: !!sidebarWidth ? "none" : `translateX(-${sidebarWidth}px)`,
      transition: "transform 300ms cubic-bezier(0, 0, 0.2, 1) 0ms",
      height: `calc(100vh - ${headerHeight}px)`,
      width: `${sidebarWidth}px`,
      visibility: !!sidebarWidth ? "visible" : "hidden",
    },
    content: {
      transition: "margin 300ms cubic-bezier(0, 0, 0.2, 1) 0ms",
      marginLeft: `${sidebarWidth}px`,
      marginTop: `${headerHeight}px`,
      marginBottom: `${headerHeight}px`,
      height: `calc(100vh - ${headerHeight}px)`,
    },
  };

  return (
    <div>
      {header && <header>{header}</header>}
      {sidebar && (
        <aside className={classes.sidebar} style={inlineStyles.sidebar}>
          {sidebar}
        </aside>
      )}
      <main style={inlineStyles.content}>
        <div className={classes.contentInner}>{children}</div>
      </main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};
