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
import av1_User from "../../assets/images/cover-1.png";

const user = {
  name: "Nguyen A",
  avatar: { av1_User },
  jobTitle: "Senior Developer",
  country: "Viet Nam",
  city: "Ha Noi,",
  timezone: "GTM-7",
} as const;

export function AccountInfo(): React.JSX.Element {
  return (
    <Card sx={{ marginRight: "10px", borderRadius: "10px" }}>
      <CardContent sx={{ height: "315px" }}>
        <Stack spacing={2} sx={{ alignItems: "center", mt: "50px" }}>
          <div>
            <Avatar src={av1_User} sx={{ height: "80px", width: "80px" }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {user.name}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.jobTitle}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.city} {user.country}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider variant="middle" />
      <CardActions sx={{ justifyContent: "center" }}>
        <Button sx={{ borderRadius: "10px", width: "8vw" }} variant="contained">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}
