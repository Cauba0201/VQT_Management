import { Box, Grid, List, Typography, useTheme } from "@mui/material";
import StatBox from "../common/StatBox";
import { tokens } from "../../theme";
import PersonIcon from "@mui/icons-material/Person";
import LineChart from "../common/chart-data/LineChart";
import BarChart from "../common/chart-data/BarChart";
import PieChart from "../common/chart-data/PieChart";
import NewItems from "../common/NewItems";
import { newItems } from "../../data/mockData";
import GeographyChart from "../common/chart-data/MapView";
import MyResponsiveStream from "../common/chart-data/monoLineChart";

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
        <Grid
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={8}
          borderRadius="10px"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="21,202"
            subtitle="Latency"
            increase="0%"
            subtitleb="From last week"
            color="#203461"
          />
        </Grid>
        <Grid
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={8}
          borderRadius="10px"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="Avagret"
            increase="+12%"
            subtitleb="From last week"
            color={colors.greenAccent[500]}

          />
        </Grid>
        <Grid
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="HPG"
            increase="-12%"
            subtitleb="From last week"
            color="#d9534f"

          />
        </Grid>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="NVL"
            increase="+12%"
            subtitleb="From last week"
            color={colors.greenAccent[500]}

          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="DXG"
            increase="0%"
            subtitleb="From last week"
            color="#203461"

          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.white[100]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <StatBox
            icon={
              <PersonIcon sx={{ color: colors.grey[600], fontSize: "20px" }} />
            }
            title="12,567"
            subtitle="VLM"
            increase="-12%"
            subtitleb="From last week"
            color="#d9534f"

          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          borderRadius="10px"
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
                  fontWeight="600"
                  color={colors.grey[400]}
                >
                  Line Chart
                </Typography>
                {/* <Typography
                  variant="h5"
                  fontWeight="550"
                  color={colors.grey[600]}
                >
                  subtitle
                </Typography> */}
              </Box>
              <Box></Box>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          p="30px"
          borderRadius="10px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[400]}>
              Pie Chart
            </Typography>
            {/* <Typography variant="h5" fontWeight="500">
              Campaign
            </Typography> */}
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <PieChart />
          </Box>
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          bgcolor={colors.white[100]}
          p="30px"
          borderRadius="10px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5" fontWeight="600" color={colors.grey[400]}>
              Bar Chart
            </Typography>
            {/* <Typography variant="h5" fontWeight="500">
              Campaign
            </Typography> */}
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
          borderRadius="10px"
        >
          <Box display="flex" gap={1}>
            <Typography variant="h5"
                  fontWeight="600"
                  color={colors.grey[400]}>
              Pie Chart
            </Typography>
            {/* <Typography variant="h5" fontWeight="500">
              Campaign
            </Typography> */}
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 9"
          gridRow="span 4"
          bgcolor={colors.white[100]}
          borderRadius="10px"
        >
          <Box
            display="flex"
            gridTemplateColumns="repeat(10, 1fr)"
            gridAutoRows="130px"
            gap="20px"
          >
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                component="div"
                m="20px"
                ml="30px"
                gutterBottom
                fontWeight="600"
                  color={colors.grey[400]}
              >
                News
              </Typography>

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
            </Grid>
          </Box>
        </Box>
        {/* Row 4 */}
        <Box
          sx={{
            gridColumn: "span 9",
            gridRow: "span 2",
            backgroundColor: colors.white[100],
            padding: "30px",
          }}
          borderRadius="10px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
            color={colors.grey[400]}

            
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 18",
            gridRow: "span 3",
            backgroundColor: colors.white[100],
            padding: "30px",
          }}
          borderRadius="10px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
            color={colors.grey[400]}

            
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <MyResponsiveStream  />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeMain;
