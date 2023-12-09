import { Divider } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Item = {
  label: string;
  path: string;
  prefix?: JSX.Element;
};

export type SidebarContentProps = {
  items: Item[];
};

export const SidebarContent = ({ items }: SidebarContentProps) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="text-primary font-semibold p-2">
        {t("global.sidebarHeadline")}
      </div>
      {items.map(({ label, path, prefix }) => (
        <>
          <div className="p-2 w-full hover:bg-secondary-light hover:text-secondary rounded-lg my-2">
            <Link className="w-full block" href={path}>
              <div className="flex p-2 items-center gap-2">
                {prefix}
                <span>{label}</span>
              </div>
            </Link>
          </div>

          <Divider />
        </>
      ))}
    </div>
  );
};
