import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Android12Switch } from "../../../utils/customs/Switch";
import { useState } from "react";
import { currencies, timess } from "../../data/index";
import BootstrapButton from "../../../utils/customs/ButtonLower";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DialogOptionServerButton from "../../../utils/customs/DialogOptionServerButton";
import FrameTestBottom from "./FrameTestBottom";
import FullFeaturedCrudGrid from "../../../utils/customs/GridOptions";
import GridOptionsVideo from "../../../utils/customs/GridOptionsVideo";
import GridOptionsPing from "../../../utils/customs/GridOptionsPing";

const TestBottom = () => {
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("none");

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.checked);
  };
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Card sx={{ borderRadius: "20px" }}>
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <FrameTestBottom
            title="Bài đo Website"
            name="Web Loading Time"
            times="Số lần"
            list="Danh sách trang Website"
            time="Time test (ms)"
            option="Tùy chỉnh"
            note="Note: Enter full with URL : “http://...” or “https://..."
            tableD="Loading Website Advanced Config "
          >
            <FullFeaturedCrudGrid />
          </FrameTestBottom>
          <FrameTestBottom
            title="Bài đo Website"
            name="Video Streaming"
            times="Số lần"
            list="Danh sách trang Video"
            time="Time test (ms)"
            option="Tùy chỉnh"
            tableD="Video Streaming"
            note="Enter full with URL : “http://...” or “https://... Video MUST NOT contain Ads"
          >
            <GridOptionsVideo />
          </FrameTestBottom>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>Bài đo</Typography>
                Dowload/Upload
                <Android12Switch
                  color="primary"
                  checked={success}
                  onChange={handleSwitch}
                  value="dynamic-class-names"
                />
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>Số lần</Typography>
                <TextField
                  id="outlined-number"
                  type="number"
                  defaultValue={3000}
                  placeholder="3000"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Danh sách trang Server
                </Typography>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  defaultValue="none"
                  value={selectedValue}
                  onChange={handleSelectChange}
                  size="small"
                  SelectProps={{
                    native: true,
                  }}
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <Box sx={{ display: "flex", marginTop: "10px" }} gap={2}>
                  <Box sx={{ flexDirection: "column", width: "120px" }}>
                    <Typography sx={{ fontWeight: "500" }}>
                      Số luồng tải
                    </Typography>
                    <TextField
                      id="outlined-number"
                      type="number"
                      defaultValue={4}
                      placeholder="4"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box sx={{ flexDirection: "column", width: "120px" }}>
                    <Typography sx={{ fontWeight: "500" }}>
                      Dung lượng file
                    </Typography>
                    <TextField
                      id="outlined-number"
                      type="number"
                      defaultValue={500}
                      placeholder="500 MB"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ marginTop: "23px" }}>
                  <BootstrapButton
                    variant="contained"
                    sx={{ bgcolor: "#d9d9d9", color: "black" }}
                    onClick={handleClickOpen}
                    disabled={selectedValue !== "edit"}
                  >
                    Tùy chỉnh
                  </BootstrapButton>
                  <DialogOptionServerButton
                    isOpen={isOpen}
                    onClose={handleClose}
                    tableD1="Server Dowload"
                    tableD2="Select Mode"
                  />
                </Box>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Time test (ms)
                </Typography>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  defaultValue="10"
                  size="small"
                  SelectProps={{
                    native: true,
                  }}
                >
                  {timess.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>Trạng thái</Typography>
                {/* <PanoramaFishEyeIcon /> */}
                <CheckCircleIcon sx={{ color: "green" }} />
              </TableCell>
            </TableRow>
          </TableHead>
          <FrameTestBottom
            title="Bài đo "
            name="Ping"
            times="Số lần"
            list="Địa chỉ"
            time="Số gói tin"
            option="Tùy chỉnh"
            note="IP address must not be duplicated across rows"
            tableD="Cấu hình Ping chi tiết"
          >
            <GridOptionsPing />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Detail Ping Log"
              />
            </FormGroup>
            <Box sx={{ flexDirection: "column" }}>
              <Box
                sx={{
                  marginBottom: "5px",
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Packet Size:
                </Typography>
                <TextField
                  id="outlined-number"
                  type="number"
                  defaultValue={32}
                  placeholder="Bytes"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Typography>Bytes</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Request Time Out:
                </Typography>
                <TextField
                  id="outlined-number"
                  type="number"
                  defaultValue={3000}
                  placeholder="Miliseconds"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Typography>Miliseconds</Typography>
              </Box>
            </Box>
          </FrameTestBottom>
        </Table>
      </Box>
    </Card>
  );
};

export default TestBottom;
