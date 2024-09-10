import { Drawer, Avatar, List, Stack, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebaritemCollapse from "./SidebaritemCollapse";
import SidebarItem from "./SidebarItem";
import logo_viettel from "../../assets/images/logo_no_bg.png";
import sizeConfigs from "../../configs/sizeConfig";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        // transition: (theme) =>
        //   theme.transitions.create("width", {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        //   }),
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: "#ffffff",
          // backgroundColor: "#d9d9d9",
          color: colorConfigs.sidebar.color,
          // transition: (theme) =>
          //   theme.transitions.create("width", {
          //     easing: theme.transitions.easing.sharp,
          //     duration: theme.transitions.duration.enteringScreen,
          //   }),
        },
      }}
    >
      <List disablePadding>
        <Toolbar>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar
              sx={{ width: "10vw", height: "8.5vh" }}
              variant="square"
              src={logo_viettel}
            />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebaritemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
