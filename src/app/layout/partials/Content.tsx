import clsx from "clsx";
import { ReactNode } from "react";

type ContentProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  contentInnerClassName?: string;
};

const defaultClasses = {
  container: "rounded-lg  bg-white w-full",
  contentInner: "p-6",
  header: "p-6 border-b",
  title: "text-lg font-medium",
};

export const Content = ({
  children,
  title,
  className,
  contentInnerClassName,
}: ContentProps) => {
  const contentInnerClasses = clsx(
    defaultClasses.contentInner,
    contentInnerClassName
  );
  const containerClasses = clsx(defaultClasses.container, className);

  return (
    <div className={containerClasses}>
      {typeof title === "string" ? (
        <div className={defaultClasses.header}>
          <h1 className={defaultClasses.title}>{title}</h1>
        </div>
      ) : (
        title
      )}

      <div className={contentInnerClasses}>{children}</div>
    </div>
  );
};
