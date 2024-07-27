import * as React from "react";
import {
  Typography,
  Stack,
  Divider,
  CardContent,
  CardActions,
  Card,
  Button,
  Avatar,
} from "@mui/material";

const user = {
  name: "Sofia Rivers",
  avatar: "assets/images/cover-1.png",
  jobTitle: "Senior Developer",
  country: "USA",
  city: "Los Angeles",
  timezone: "GTM-7",
} as const;

export function AccountInfo(): React.JSX.Element {
  return (
    <Card sx={{ marginRight: "10px" }}>
      <CardContent sx={{ height: "340px" }}>
        <Stack spacing={2} sx={{ alignItems: "center",mt:"50px" }}>
          <div>
            <Avatar src={user.avatar} sx={{ height: "80px", width: "80px" }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: "center" }}>
            <Typography variant="h5">{user.name}</Typography>
            <Typography color="text.secondary" variant="body2">
              {user.city} {user.country}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.timezone}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}
