import { Box } from "@mui/material";
import Topbar from "../common/Topbar";
import Sidebar from "../common/Sidebar";
import colorConfigs from "../../configs/colorConfigs";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import SidebarIcon from "../common/SidebarIcon";

interface VisibilityContextProps {
  isCollapsed: boolean;
  handleShowSidebar: () => void;
}

export const VisibilityContext = createContext<
  VisibilityContextProps | undefined
>(undefined);

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleShowSidebar = (): void => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <VisibilityContext.Provider value={{ isCollapsed, handleShowSidebar }}>
      <Box sx={{ display: "flex" }}>
        <Topbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            minHeight: "100vh",
            width: "100%",
            bgcolor: colorConfigs.mainBg,
            marginLeft: "300px",
            marginTop: "60px",
          }}
        >
          {isCollapsed && <Sidebar /> ? <Sidebar /> : <SidebarIcon />}
          <Outlet />
        </Box>
      </Box>
    </VisibilityContext.Provider>
  );
};

export default MainLayout;
