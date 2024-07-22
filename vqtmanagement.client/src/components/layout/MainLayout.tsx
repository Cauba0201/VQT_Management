import { Box, Toolbar } from "@mui/material";
import Topbar from "../common/Topbar";
import Sidebar from "../common/Sidebar";
import colorConfigs from "../../configs/colorConfigs";
// import NoContent from "../pages/NoContentPage/NoContent";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "100vh",
          width: "100%",
          bgcolor: colorConfigs.mainBg,
          marginLeft: "300px",
          
        }}
      >
        <Toolbar />
        <Outlet />
        {/* <NoContent /> */}
      </Box>
    </Box>
  );
};

export default MainLayout;
