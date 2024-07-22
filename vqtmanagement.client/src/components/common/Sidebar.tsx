import { Drawer, Avatar, List, Stack, Toolbar } from "@mui/material";
// import sizeConfigs from "../../configs/sizeConfig";
import colorConfigs from "../../configs/colorConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebaritemCollapse from "./SidebaritemCollapse";
import SidebarItem from "./SidebarItem";
import logo_viettel from "../../assets/images/logo_no_bg.png";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        // width: "300px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar
              sx={{ width: "80%", height: "100%" }}
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
