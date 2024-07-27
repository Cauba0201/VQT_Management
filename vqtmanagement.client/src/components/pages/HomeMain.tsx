import { Box, Divider, Grid, List, Paper, Typography, useTheme } from "@mui/material";
import StatBox from "../common/StatBox";
import { tokens } from "../../theme";
import PersonIcon from "@mui/icons-material/Person";
import LineChart from "../common/chart-data/LineChart";
import BarChart from "../common/chart-data/BarChart";
import PieChart from "../common/chart-data/PieChart";
import NewItems from "../common/NewItems";
import { newItems, orderTimelineItems } from "../../data/mockData";
import OrderTimeLineItem from "../common/OrderTimeLineItem";

// import NoContent from "./NoContentPage/NoContent";

const HomeMain = () => {
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
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="21,202"
            subtitle="Latency"
            increase="+12%"
            subtitleb="From last week"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="Avagret"
            increase="+12%"
            subtitleb="From last week"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="Email"
            increase="+12%"
            subtitleb="From last week"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="Email"
            increase="+12%"
            subtitleb="From last week"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="Email"
            increase="+12%"
            subtitleb="From last week"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="Email"
            increase="+12%"
            subtitleb="From last week"
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn="span 14"
          gridRow="span 2"
          bgcolor={colors.white[100]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" mt={3}>
              <Box display="flex" gap="10px">
                <Typography
                  variant="h5"
                  fontWeight="550"
                  color={colors.grey[400]}
                >
                  Line Chart
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="550"
                  color={colors.grey[600]}
                >
                  subtitle
                </Typography>
              </Box>
              <Box></Box>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="12px"
          >
            <Typography variant="h5">Recent </Typography>
            {/* <Typography>$59,000</Typography> */}
          </Box>
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          p="30px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="500">
              Bar Chart
            </Typography>
            <Typography variant="h5" fontWeight="500">
              Campaign
            </Typography>
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <BarChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          p="30px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="500">
              Pie Chart
            </Typography>
            <Typography variant="h5" fontWeight="500">
              Campaign
            </Typography>
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          p="30px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="500">
              Pie Chart
            </Typography>
            <Typography variant="h5" fontWeight="500">
              Campaign
            </Typography>
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          p="30px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="500">
              Bar Chart
            </Typography>
            <Typography variant="h5" fontWeight="500">
              Campaign
            </Typography>
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <BarChart />
          </Box>
        </Box>
        {/* Row 4 */}
        <Box
          gridColumn="span 10"
          gridRow="span 4"
          bgcolor={colors.white[100]}
        >
          <Box
            display="flex"
            gridTemplateColumns="repeat(10, 1fr)"
            gridAutoRows="130px"
            gap="20px"
          >
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ marginLeft: "20px", width: "790px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  m="20px"
                  ml="30px"
                  gutterBottom
                  fontWeight="bold"
                >
                  News
                </Typography>
                <Divider/>

                <List>
                  {newItems.map((item, index) => (
                    <NewItems
                      key={index}
                      title={item.title}
                      description={item.description}
                      time={item.time}
                      avatar={item.avatar}
                    />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Box>
        </Box>
        <Box gridColumn="span 8" gridRow="span 4" bgcolor={colors.white[100]}>
          <Box
            display="flex"
            gridTemplateColumns="repeat(10, 1fr)"
            gridAutoRows="130px"
            gap="20px"
          >
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ marginLeft: "20px", width: "620px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  m="20px"
                  ml="30px"
                  gutterBottom
                  fontWeight="bold"
                >
                  Order Timeline
                </Typography>
                <Divider/>
                <List>
                  {orderTimelineItems.map((item, index) => (
                    <OrderTimeLineItem
                      key={index}
                      status={item.status}
                      time={item.time}
                      color={item.color}
                    />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeMain;
