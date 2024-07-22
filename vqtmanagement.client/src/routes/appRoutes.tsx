import { RouteType } from "./config";
import HomeMain from "../components/pages/HomeMain";
import DataTraffic from "../components/pages/Data Traffic/DataTraffic";
import PageLayoutChildrens from "../components/pages/Signal/PageLayoutChildren";
import AnalyticsPage from "../components/pages/Signal/AnalyticsPage";
import SignalAndQualityPage from "../components/pages/Signal/SignalAndQualityPage";
import Latency from "../components/pages/Latency/Latency";
import PhoneCall from "../components/pages/PhoneCall/PhoneCall";
import Contact from "../components/pages/Contact/Contact";
import MapView from "../components/pages/MapView/MapView";
import Support from "../components/pages/Support/Support";
//icon
import HomeIcon from "@mui/icons-material/Home";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportIcon from "@mui/icons-material/Support";
import MapIcon from "@mui/icons-material/Map";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import { useTranslation } from "react-i18next";



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
    path: "/data-traffic",
    element: <DataTraffic />,
    state: "datatraffic",
    sidebarProps: {
      displayText: "Data Traffic",
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
    path: "/phone-call",
    element: <PhoneCall />,
    state: "phonecall",
    sidebarProps: {
      displayText: "Phone Call",
      icon: <PhoneIcon />,
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

// const TranslatedRoutes = (): void => {
//   const {t}=useTranslation()

//   const translateRoutes = appRoutes.map((route)=> {
//     if(route.sidebarProps){
//       return {
//         ...route,
//         sidebarProps: {
//           ...route.sidebarProps,
//           displayText: t(route.sidebarProps.displayText)
//         }
//       };
//     }
//   })
// }

// export TranslatedRoutes;