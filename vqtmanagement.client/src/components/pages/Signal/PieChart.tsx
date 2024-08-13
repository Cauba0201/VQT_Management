import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../theme";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [chartData, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Box m="20px">
      <Box
        display="grid"
        gridTemplateColumns="repeat(18, 1fr)"
        gridAutoRows="130px"
        gap="20px"
      >
        <Box
          gridColumn="span 10"
          gridRow="span 5"
          bgcolor={colors.white[100]}
          p="30px"
          borderRadius="20px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[400]}>
              Pie Chart
            </Typography>
          </Box>
          <Box height="550px" m="-20px 0 0 0">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="donut"
            />
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

export default PieChart;
