import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import BarChart from "../../common/chart-data/BarChart";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
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
          gridColumn="span 13"
          gridRow="span 5"
          bgcolor={colors.white[100]}
          p="30px"
          borderRadius="20px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[400]}>
              Area Chart
            </Typography>
          </Box>
          <Box height="650px" m="-20px 0 0 0">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="area"
              height={350}
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

export default AreaChart;
