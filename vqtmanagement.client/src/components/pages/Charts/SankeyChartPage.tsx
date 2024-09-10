import { Box, Typography, useTheme } from "@mui/material";
import SankeyChart from "../../common/chart-data/SankeyChart";
import { tokens } from "../../../theme";
import { mockDataSankey as data } from "../../common/chart-data/data-chart/SankeyChartData";

const SankeyChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box
        display="grid"
        gridTemplateColumns="repeat(18, 1fr)"
        gridAutoRows="130px"
        gap="20px"
      >
        <Box
          gridColumn="span 13"
          gridRow="span 5"
          bgcolor={colors.white[100]}
          p="30px"
          borderRadius="20px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[400]}>
              Sankey Chart
            </Typography>
          </Box>
          <Box height="650px" m="-20px 0 0 0">
            <SankeyChart data={data} />
          </Box>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 5"
          bgcolor={colors.white[100]}
          p="30px"
          borderRadius="20px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[400]}>
              Information
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SankeyChartPage;
