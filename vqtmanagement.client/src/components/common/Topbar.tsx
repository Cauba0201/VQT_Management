import { useContext } from "react";
import {
  AppBar,
  Box,
  useTheme,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { colorModeContext, tokens } from "../../theme";
import sizeConfigs from "../../configs/sizeConfig";
import colorConfigs from "../../configs/colorConfigs";  
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorsMode = useContext(colorModeContext);

  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/login");
  };
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
          <Box display="flex" borderRadius="3px" bgcolor={colors.primary[400]}>
            <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              marginTop: "5px",
            }}
          >
            VQT Manager
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
