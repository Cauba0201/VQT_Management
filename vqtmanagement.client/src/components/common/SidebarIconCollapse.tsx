import { useEffect, useState } from "react";
import { RouteType } from "../../routes/config";
import { useSelector } from "react-redux";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
// import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
// import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SidebarItem from "./SidebarItem";
import { RootState } from "../redux/store";
import colorConfigs from "../../configs/colorConfigs";
import SidebarIconItem from "./SidebarIconItem";

type Props = {
  item: RouteType;
};

const SidebarIconCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
  const { appState } = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item]);
  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          paddingY: "12px",
          paddingX: "24px",
        }}
      >
        <ListItemIcon color={colorConfigs.sidebar.color}>
          {item.sidebarProps.icon}
        </ListItemIcon>
      
        {/* {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />} */}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarIconCollapse item={route} key={index} />
              ) : (
                <SidebarIconItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarIconCollapse;
