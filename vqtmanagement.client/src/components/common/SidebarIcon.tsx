import { Box, Drawer, List } from "@mui/material";
import appRoutes from "../../routes/appRoutes";
import colorConfigs from "../../configs/colorConfigs";
import SidebarIconCollapse from "./SidebarIconCollapse";
import SidebarIconItem from "./SidebarIconItem";

const SidebarIcon = () => {
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "70px",
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor: "#d9d9d9",
            color: colorConfigs.sidebar.color,
          },
        }}
      >
        <Box sx={{ marginTop: "84px" }}>
          <List>
            {appRoutes.map((route, index) =>
              route.sidebarProps ? (
                route.child ? (
                  <SidebarIconCollapse item={route} key={index} />
                ) : (
                  <SidebarIconItem item={route} key={index} />
                )
              ) : null
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default SidebarIcon;
