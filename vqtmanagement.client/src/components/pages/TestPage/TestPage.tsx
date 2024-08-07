import {
  Box,
  Card,
  Divider,
  Stack,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import TestBottom from "../../common/TestBottom";
import TestControl from "../../common/TestControl";
import { Android12Switch } from "../../../../utils/customs/Switch";
import { BootstrapButton } from "../../../../utils/customs/ButtonLower";

const currencies = [
  {
    value: "auto",
    label: "Tự động",
  },
  {
    value: "options",
    label: "User Selected Model",
  },
  {
    value: "none",
    label: "----",
  },
];

const cities = [
  { value: "none", label: "---Provice---" },
  { value: "hanoi", label: "Ha Noi" },
  { value: "hochiminh", label: "Ho Chi Minh" },
  { value: "namdinh", label: "Nam Dinh" },
  { value: "thanhhoa", label: "Thanh Hoa" },
  { value: "nghean", label: "Nghe An" },
  { value: "ninhbinh", label: "Ninh Binh" },
  { value: "thaibinh", label: "Thai Binh" },
  { value: "hanam", label: "Ha Nam" },
];

const TestPage = () => {
  const [success, setSuccess] = useState(false);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.checked);
  };
  return (
    <Stack spacing={2} sx={{ marginTop: "20px" }}>
      <Box sx={{ bgcolor: "#d9d9d9", borderRadius: "10px", padding: "20px" }}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5">Test</Typography>
          </Box>
          <Box>
            <BootstrapButton sx={{ color: "black", marginRight: "5px" }}>
              Edit
            </BootstrapButton>
            <BootstrapButton sx={{ color: "black", marginRight: "5px" }}>
              File
            </BootstrapButton>
            <BootstrapButton sx={{ color: "black", marginRight: "5px" }}>
              Proscess
            </BootstrapButton>
          </Box>
        </Box>
        {/* <Divider variant="middle" /> */}
        <Card sx={{ borderRadius: "10px" }}>
          <Box sx={{ overflowX: "auto" }}>
            <Table sx={{ minWidth: "800px" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Bài đo</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}> Số lần</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Thiết lập cấu hình
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Đích đo kiểm
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Trạng thái</TableCell>
                </TableRow>
                <Divider variant="middle" />
                <TableRow>
                  <TableCell>
                    Speedtest Ookla
                    <Android12Switch
                      color="primary"
                      checked={success}
                      onChange={handleSwitch}
                      value="dynamic-class-names"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-number"
                      type="number"
                      placeholder="3000"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      defaultValue="none"
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
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      defaultValue="none"
                      size="small"
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {cities.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell>
                    <PanoramaFishEyeIcon />
                    <CheckCircleIcon sx={{ color: "green" }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    ISpeed - VNNIC
                    <Android12Switch
                      color="primary"
                      checked={success}
                      onChange={handleSwitch}
                      value="dynamic-class-names"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-number"
                      type="number"
                      placeholder="3000"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      defaultValue="none"
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
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      defaultValue="none"
                      size="small"
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {cities.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell>
                    <CancelIcon sx={{ color: "red" }} />
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </Box>
        </Card>
      </Box>

      <Box sx={{ bgcolor: "#d9d9d9", borderRadius: "10px", padding: "20px" }}>
        <TestBottom />
      </Box>

      <Box
        sx={{
          padding: "20px",
          width: "100%",
        }}
      >
        <TestControl />
      </Box>
    </Stack>
  );
};

export default TestPage;
