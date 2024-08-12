import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

const today = dayjs();
const todayEndOfTheDay = today.endOf("day");

const TestControl = () => {
  return (
    <Card sx={{ borderRadius: "20px", bgcolor: "#d9d9d9" }}>
      <Box display="flex" sx={{ overflowX: "auto" }}>
        <Box
          sx={{
            padding: "10px",
            alignItems: "center",
            width: "40%",
            margin: "10px",
            bgcolor: "#ffffff",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ margin: "10px", bgcolor: "#ffffff" }}>
            <Box display="flex" justifyContent="space-between">
              <Typography sx={{ fontWeight: "bold" }}>Lịch trình</Typography>
            </Box>
            <Box display="flex" gap={2}>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker sx={{ bgcolor: "#ffffff" }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker sx={{ bgcolor: "#ffffff" }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Box>
            <Box display="flex" gap={2} sx={{ marginTop: "10px" }}>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem>
                    <TimePicker
                      defaultValue={todayEndOfTheDay}
                      sx={{ bgcolor: "#ffffff" }}
                    />
                  </DemoItem>
                </LocalizationProvider>
              </Box>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem>
                    <TimePicker
                      defaultValue={todayEndOfTheDay}
                      sx={{ bgcolor: "#ffffff" }}
                    />
                  </DemoItem>
                </LocalizationProvider>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            width: "60%",
            alignItems: "center",
            padding: "20px",
            margin: "10px",
            bgcolor: "#ffffff",
            borderRadius: "20px",
          }}
        >
          <Box>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Đặt lịch test" />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Quay phiên PPPoE"
              />
              <FormControlLabel control={<Checkbox />} label="Ẩn Chrome " />
            </FormGroup>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              UserName:
            </Typography>
            <Typography sx={{ justifyContent: "center" }}>Nguyen An</Typography>
          </Box>
          <Box flexDirection="column">
            <Box sx={{ width: "5vw" }}>
              <Button
                sx={{
                  bgcolor: "red",
                  color: "#ffffff",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  width: "6vw",
                  height: "4vh",
                  fontWeight: "bold",
                }}
              >
                Stop
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  bgcolor: "#d9d9d9",
                  color: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5px",
                  width: "6vw",
                  height: "4vh",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                start
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default TestControl;
