import {
  AccountBalanceWalletOutlined,
  AttachMoneyOutlined,
  BarChartOutlined,
  DashboardOutlined,
  HomeOutlined,
} from "@mui/icons-material";

export type PathName = "/" | "/stats" | "/finance" | "/budget";

export type NavItem = {
  path: PathName;
  prefix?: JSX.Element;
  labelKey: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    path: "/",
    labelKey: "global.navItem.home",
    prefix: <HomeOutlined />,
  },
  {
    path: "/finance",
    labelKey: "global.navItem.finance",
    prefix: <AttachMoneyOutlined />,
  },
  {
    path: "/stats",
    labelKey: "global.navItem.stats",
    prefix: <BarChartOutlined />,
  },
  {
    path: "/budget",
    labelKey: "global.navItem.budget",
    prefix: <AccountBalanceWalletOutlined />,
  },
];
