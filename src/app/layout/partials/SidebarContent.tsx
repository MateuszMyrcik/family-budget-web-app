import { Divider } from "@mui/material";
import Link from "next/link";

export type SidebarContentProps = {
  items: {
    path: string;
    label: string;
    suffix?: JSX.Element;
  }[];
};

export const SidebarContent = ({ items }: SidebarContentProps) => {
  return (
    <div>
      <div className="text-primary font-semibold p-2">Strony</div>
      {items.map(({ label, path, suffix }) => (
        <>
          <div className="p-2 w-full hover:bg-secondary-light hover:text-secondary rounded-lg my-2">
            <Link className="w-full block" href={path}>
              <div className="flex p-2 items-center gap-2">
                {suffix}
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
