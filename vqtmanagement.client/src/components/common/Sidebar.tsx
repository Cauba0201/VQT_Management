import {
  Drawer,
  Avatar,
  List,
  Stack,
  Toolbar,
  // useTheme,
  // Box,
  // MenuList,
} from "@mui/material";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import colorConfigs from "../../configs/colorConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebaritemCollapse from "./SidebaritemCollapse";
import SidebarItem from "./SidebarItem";
import logo_viettel from "../../assets/images/logo_no_bg.png";
import { useState } from "react";




const Sidebar = () => {
  // const theme = useTheme();
  // const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleShowSidebar = (): void => {
    setIsCollapsed(isCollapsed)
  }


  // const drawer = (
  //   <>
  //     <Box sx={{ display: { xs: "block", md: "none" } }}>
  //       <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
  //         {/* <LogoSection /> */}
  //       </Box>
  //     </Box>
  //     <BrowserView>
  //       <PerfectScrollbar
  //         component="div"
  //         style={{
  //           height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
  //           paddingLeft: "16px",
  //           paddingRight: "16px",
  //         }}
  //       >
  //         <MenuList />
  //         {/* <MenuCard /> */}
  //         <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
  //           <Chip
  //             label={import.meta.env.VITE_APP_VERSION}
  //             disabled
  //             chipcolor="secondary"
  //             size="small"
  //             sx={{ cursor: "pointer" }}
  //           />
  //         </Stack>
  //       </PerfectScrollbar>
  //     </BrowserView>
  //     <MobileView>
  //       <Box sx={{ px: 2 }}>
  //         <MenuList />
  //         {/* <MenuCard /> */}
  //         <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
  //           <Chip
  //             label={import.meta.env.VITE_APP_VERSION}
  //             disabled
  //             chipcolor="secondary"
  //             size="small"
  //             sx={{ cursor: "pointer" }}
  //           />
  //         </Stack>
  //       </Box>
  //     </MobileView>
  //   </>
  // );

  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "300px",
            boxSizing: "border-box",
            borderRight: "0px",
            backgroundColor:"#ffffff",
            color: colorConfigs.sidebar.color,
          },
        }}
      >
        {!isCollapsed && (<List disablePadding>
          <Toolbar >
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="center"
              
            >
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
        </List>)}
        
      </Drawer>
    </div>
    // <Box
    //   component="nav"
    //   sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
    //   aria-label="mailbox folders"
    // >
    //   {/* <Drawer
    //     container={container}
    //     variant={matchUpMd ? "persistent" : "temporary"}
    //     anchor="left"
    //     open={drawerOpen}
    //     onClose={drawerToggle}
    //     sx={{
    //       "& .MuiDrawer-paper": {
    //         width: drawerWidth,
    //         background: theme.palette.background.default,
    //         color: theme.palette.text.primary,
    //         borderRight: "none",
    //         [theme.breakpoints.up("md")]: {
    //           top: "88px",
    //         },
    //       },
    //     }}
    //     ModalProps={{ keepMounted: true }}
    //     color="inherit"
    //   >
    //     {drawer}
    //   </Drawer> */}
    //   <Drawer
    //     variant="permanent"
    //     sx={{
    //       // width: "300px",
    //       flexShrink: 0,
    //       "& .MuiDrawer-paper": {
    //         width: "300px",
    //         boxSizing: "border-box",
    //         borderRight: "0px",
    //         backgroundColor: colorConfigs.sidebar.bg,
    //         color: colorConfigs.sidebar.color,
    //       },
    //     }}
    //   >
    //     <List disablePadding>
    //       <Toolbar sx={{ marginBottom: "20px" }}>
    //         <Stack
    //           sx={{ width: "100%" }}
    //           direction="row"
    //           justifyContent="center"
    //         >
    //           <Avatar
    //             sx={{ width: "80%", height: "100%" }}
    //             variant="square"
    //             src={logo_viettel}
    //           />
    //           <IconButton
    //             sx={{ paddingY: "50px" }}
    //             // onClick={() => setIsCollapsed(!isCollapsed)}
    //           >
    //             <MenuOutlinedIcon />
    //           </IconButton>
    //         </Stack>
    //       </Toolbar>
    //       {appRoutes.map((route, index) =>
    //         route.sidebarProps ? (
    //           route.child ? (
    //             <SidebaritemCollapse item={route} key={index} />
    //           ) : (
    //             <SidebarItem item={route} key={index} />
    //           )
    //         ) : null
    //       )}
    //     </List>
    //   </Drawer>
    // </Box>
  );
};



export default Sidebar;
