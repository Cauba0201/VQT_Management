import { RouteType } from "./config";
import HomeMain from "../components/pages/HomeMain";
import PageLayoutChildrens from "../components/pages/Charts/PageLayoutChildren";
import AnalyticsPage from "../components/pages/Charts/ColumnChart";
import Latency from "../components/pages/Latency/Latency";
import Contact from "../components/pages/Contact/Contact";
import MapView from "../components/pages/MapView/MapView";
import Support from "../components/pages/Support/Support";
//icon
import HomeIcon from "@mui/icons-material/Home";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SupportIcon from "@mui/icons-material/Support";
import MapIcon from "@mui/icons-material/Map";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GroupIcon from "@mui/icons-material/Group";
import AccountManager from "../components/pages/AccountManager/AccountManagement";
import TestPage from "../components/pages/TestPage/TestPage";
import BarChartIcon from "@mui/icons-material/BarChart";
import HighQualityIcon from "@mui/icons-material/HighQuality";
// import LoginPage from "../components/pages/LogIn/LoginPage";
import BarChartt from "../components/pages/Charts/BarChart";
import ColumnChart from "../components/pages/Charts/ColumnChart";
import AreaChart from "../components/pages/Charts/AreaChart";
import PieChart from "../components/pages/Charts/PieChart";
import SankeyChart from "../components/pages/Charts/SankeyChartPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomeMain />,
    state: "home",
  },
  {
    path: "/home",
    element: <HomeMain />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon />,
    },
  },
  {
    path: "/account-manager",
    element: <AccountManager />,
    state: "accountmanager",
    sidebarProps: {
      displayText: "Account Manager",
      icon: <GroupIcon />,
    },
  },
  {
    path: "/test",
    element: <TestPage />,
    state: "test",
    sidebarProps: {
      displayText: "Test",
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    path: "/chart",
    element: <PageLayoutChildrens />,
    state: "chart",
    sidebarProps: {
      displayText: "Chart",
      icon: <SignalCellularAltIcon />,
    },
    child: [
      {
        index: true,
        element: <AnalyticsPage />,
        state: "chart.index",
      },
      {
        path: "/chart/area-chart",
        element: <AreaChart />,
        state: "chart.areachart",
        sidebarProps: {
          displayText: "Area Chart",
          icon: <HighQualityIcon />,
        },
      },
      {
        path: "/chart/columnchart",
        element: <ColumnChart />,
        state: "chart.columnchart",
        sidebarProps: {
          displayText: "Column Chart",
          icon: <BarChartIcon />,
        },
      },
      {
        path: "/chart/barchart",
        element: <BarChartt />,
        state: "chart.barchart",
        sidebarProps: {
          displayText: "Bar Chart",
          icon: <BarChartIcon />,
        },
      },
      {
        path: "/chart/piechart",
        element: <PieChart />,
        state: "chart.piechart",
        sidebarProps: {
          displayText: "Pie Chart",
          icon: <BarChartIcon />,
        },
      },
      {
        path: "/chart/sankeychart",
        element: <SankeyChart/>,
        state: "chart.sankeychart",
        sidebarProps: {
          displayText: "Sankey Chart",
          icon: <BarChartIcon />,
        },
      },
    ],
  },
  {
    path: "/latency",
    element: <Latency />,
    state: "latency",
    sidebarProps: {
      displayText: "Latency",
      icon: <AppsOutlinedIcon />,
    },
  },

  {
    path: "/contact",
    element: <Contact />,
    state: "contact",
    sidebarProps: {
      displayText: "Contact",
      icon: <SupportAgentIcon />,
    },
  },
  {
    path: "/map-view",
    element: <MapView />,
    state: "mapview",
    sidebarProps: {
      displayText: "Map View",
      icon: <MapIcon />,
    },
  },
  {
    path: "/support",
    element: <Support />,
    state: "support",
    sidebarProps: {
      displayText: "Support",
      icon: <SupportIcon />,
    },
  },
];

export default appRoutes;
