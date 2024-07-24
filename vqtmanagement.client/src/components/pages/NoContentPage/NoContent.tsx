import { Box, Typography, useTheme } from "@mui/material";
// import NoContentImage from "../../../assets/images/cd_web_hosting_404_not_found.png";
import { tokens } from "../../../theme";

const NoContent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        color={colors.primary[100]}
      >
        No Content
      </Typography>
      <Typography variant="body1" color={colors.primary[100]}>
        We couldn't find the page you were looking for.
      </Typography>
    </Box>
  );
};

export default NoContent;
