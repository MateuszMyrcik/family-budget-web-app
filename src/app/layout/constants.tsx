import {
  AttachMoneyOutlined,
  BarChartOutlined,
  DashboardOutlined,
} from "@mui/icons-material";

export type PathName = "/" | "/stats" | "/finance";

export type NavItem = {
  path: PathName;
  labelKey: string;
  suffix?: JSX.Element;
};

export const NAV_ITEMS: NavItem[] = [
  {
    path: "/",
    labelKey: "navItem.home",
    suffix: <DashboardOutlined />, // TODO: research for better icon
  },
  {
    path: "/finance",
    labelKey: "navItem.finance",
    suffix: <AttachMoneyOutlined />,
  },
  {
    path: "/stats",
    labelKey: "navItem.stats",
    suffix: <BarChartOutlined />,
  },
];
