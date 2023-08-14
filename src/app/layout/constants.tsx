import {
  AttachMoneyOutlined,
  BarChartOutlined,
  DashboardOutlined,
} from "@mui/icons-material";

export type PathName = "/" | "/stats" | "/finance";

type NavItem = {
  path: PathName;
  label: string;
  suffix?: JSX.Element;
};

export const NAV_ITEMS: NavItem[] = [
  {
    path: "/",
    label: "Podsumowanie",
    suffix: <DashboardOutlined />, // TODO: research for better icon
  },
  {
    path: "/finance",
    label: "Finanse",
    suffix: <AttachMoneyOutlined />,
  },
  {
    path: "/stats",
    label: "Statystki",
    suffix: <BarChartOutlined />,
  },
];
