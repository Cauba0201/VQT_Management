import { Box, useTheme } from "@mui/material";
import LineChart from "../../common/LineChart";
import PieChart from "../../common/PieChart";
import BarChart from "../../common/BarChart";
import { tokens } from "../../../theme";

const DataTraffic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="0px 20px" gridRow="span 3" backgroundColor={colors.primary[400]}>
      <Box height="75vh" >
        <LineChart />
      </Box>
      <Box height="75vh" >
        <PieChart />
      </Box>
      <Box height="75vh" >
        <BarChart />
      </Box>
    </Box>
  );
};

export default DataTraffic;
