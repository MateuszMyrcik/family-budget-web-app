import { Divider } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { NavItem } from "../constants";

export type SidebarContentProps = {
  items: NavItem[];
};

export const SidebarContent = ({ items }: SidebarContentProps) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="text-primary font-semibold p-2">Strony</div>
      {items.map(({ labelKey, path, suffix }) => (
        <>
          <div className="p-2 w-full hover:bg-secondary-light hover:text-secondary rounded-lg my-2">
            <Link className="w-full block" href={path}>
              <div className="flex p-2 items-center gap-2">
                {suffix}
                <span>{t(labelKey)}</span>
              </div>
            </Link>
          </div>

          <Divider />
        </>
      ))}
    </div>
  );
};
