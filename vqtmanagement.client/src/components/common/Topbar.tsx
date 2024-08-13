import { useContext, useState } from "react";
import {
  AppBar,
  Box,
  useTheme,
  IconButton,
  InputBase,
  Typography,
  Avatar,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { colorModeContext, tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import sizeConfigs from "../../configs/sizeConfig";
import colorConfigs from "../../configs/colorConfigs";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { VisibilityContext } from "../layout/MainLayout";
import logo_viettel from "../../assets/images/logo_small3.png";

const Topbar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorsMode = useContext(colorModeContext);
  const { handleShowSidebar } = useContext(VisibilityContext);
  // const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };

    // const toggleSidebar = () => {
    //   setIsExpanded(!isExpanded);
    // };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Box>
        <Box display="flex" justifyContent="space-between" p={2.75}>
          <Box display="flex" borderRadius="3px">
            <IconButton type="button" sx={{ p: 1 }} onClick={handleShowSidebar}>
              <MenuIcon />
            </IconButton>
            <Box bgcolor={colors.primary[400]}>
              <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              marginTop: "5px",
            }}
          >
            <Box>
              <Avatar
                sx={{ width: "30vw", height: "3vh" }}
                variant="square"
                src={logo_viettel}
              />
            </Box>
          </Typography>
          <Box display="flex">
            <IconButton onClick={colorsMode.toggleColorMode}>
              {theme.palette.mode === "light" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleNavigateLogin}>
              <PersonOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Topbar;
