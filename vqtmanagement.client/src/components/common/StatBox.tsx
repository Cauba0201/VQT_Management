import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  subtitle: string;
  increase: string;
  subtitleb: string;
  color: string;
};

const StatBox = ({
  icon,
  title,
  subtitle,
  increase,
  subtitleb,
  color,
}: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex">
        {icon}
        <Typography marginLeft="3px"fontWeight="bold">{subtitle}</Typography>
      </Box>
      <Typography
        sx={{ color: { color } }}
        variant="h4"
        fontWeight="bold"
        fontStyle="italic"
      >
        {title}
      </Typography>
      <Box display="flex">
        <Typography sx={{ color: {color} }} fontStyle="italic">
          {increase}
        </Typography>
        <Typography sx={{ color: colors.grey[100] }} marginLeft="5px">
          {subtitleb}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
