import { Box } from "@mui/material";
import Topbar from "../common/Topbar";
import Sidebar from "../common/Sidebar";
import colorConfigs from "../../configs/colorConfigs";
import { Outlet } from "react-router-dom";
// import useMediaQuery from "@mui/material/useMediaQuery";


9

const MainLayout = () => {
  // const theme= useTheme()
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
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
        <Sidebar />
        <Outlet />
      </Box>
    </Box>
    
  );
};

export default MainLayout;
