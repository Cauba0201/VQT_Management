import { Box, Typography, useTheme } from "@mui/material";
// import LineChart from "../../common/LineChart";
// import PieChart from "../../common/PieChart";
// import BarChart from "../../common/BarChart";
import { tokens } from "../../../theme";
import Form from "../../common/Form";
import BarChart from "../../common/BarChart";

const DataTraffic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px" gridRow="span 3" bgcolor={colors.primary[400]}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          bgcolor={colors.primary[900]}
        >
          <Box
            mt="20px"
            p="0 30px"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Box display="flex" gap="10px">
              <Typography
                variant="h5"
                fontWeight="500"
                marginBottom="10px"
                color={colors.grey[200]}
              >
                Form General
              </Typography>
              
            </Box>
          </Box>
          <Box>
            <Form />
          </Box>
          
          
        </Box>
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          bgcolor={colors.primary[900]}
        >
          <Box
            mt="20px"
            p="0 30px"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Box display="flex" gap="10px">
              <Typography
                variant="h5"
                fontWeight="500"
                marginBottom="10px"
                color={colors.grey[200]}
              >
                Chart General
              </Typography>
              
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataTraffic;
