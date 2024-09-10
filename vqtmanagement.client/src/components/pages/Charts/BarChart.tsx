import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChartt = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [chartData, setChartData] = useState({
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
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
              Bar Chart
            </Typography>
          </Box>
          <Box height="650px" m="-20px 0 0 0">
            {/* <BarChart /> */}
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="line"
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

export default BarChartt;
