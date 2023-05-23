import {
  AttachMoneyOutlined,
  BarChartOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

type NavItem = {
  path: string;
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
    path: "/expenses",
    label: "Wydatki",
    suffix: <ShoppingCartOutlined />,
  },
  {
    path: "/incomes",
    label: "Dochody",
    suffix: <AttachMoneyOutlined />,
  },
  {
    path: "/stats",
    label: "Statystki",
    suffix: <BarChartOutlined />,
  },
];
