import { Avatar, ListItem, ListItemText } from "@mui/material";
import React from "react";

interface Props {
  status: string;
  time: string;
  color: string;
}

const OrderTimeLineItem: React.FC<Props> = ({ status, time, color }) => {
  return (
    <ListItem>
      <Avatar style={{ backgroundColor: color }}></Avatar>
      <ListItemText
        primary={status}
        secondary={time}
        sx={{ marginLeft: "20px" }}
      />
    </ListItem>
  );
};

export default OrderTimeLineItem;
