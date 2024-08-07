import { RouteType } from "./config";
import HomeMain from "../components/pages/HomeMain";
import PageLayoutChildrens from "../components/pages/Signal/PageLayoutChildren";
import AnalyticsPage from "../components/pages/Signal/AnalyticsPage";
import SignalAndQualityPage from "../components/pages/Signal/SignalAndQualityPage";
import Latency from "../components/pages/Latency/Latency";
import Contact from "../components/pages/Contact/Contact";
import MapView from "../components/pages/MapView/MapView";
import Support from "../components/pages/Support/Support";
//icon
import HomeIcon from "@mui/icons-material/Home";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
// import PhoneIcon from "@mui/icons-material/Phone";
import SupportIcon from "@mui/icons-material/Support";
import MapIcon from "@mui/icons-material/Map";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GroupIcon from "@mui/icons-material/Group";
import AccountManager from "../components/pages/PhoneCall/AccountManagement";
import TestPage from "../components/pages/TestPage/TestPage";

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
    path: "/signal",
    element: <PageLayoutChildrens />,
    state: "signal",
    sidebarProps: {
      displayText: "Signal",
      icon: <SignalCellularAltIcon />,
    },
    child: [
      {
        index: true,
        element: <AnalyticsPage />,
        state: "signal.index",
      },
      {
        path: "/signal/signal-and-quality",
        element: <SignalAndQualityPage />,
        state: "signal.signalandquality",
        sidebarProps: {
          displayText: "Signal And Quality",
        },
      },
      {
        path: "/signal/analyst",
        element: <AnalyticsPage />,
        state: "signal.analyst",
        sidebarProps: {
          displayText: "Analyst",
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
