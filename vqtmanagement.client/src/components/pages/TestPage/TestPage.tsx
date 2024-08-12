import {
  Box,
  Card,
  Stack,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import TestBottom from "../../common/TestBottom";
import TestControl from "../../common/TestControl";
import BootstrapButton from "../../../../utils/customs/ButtonLower";
import FrameTestTop from "../../common/FrameTestTop";

const TestPage = () => {
  const [success, setSuccess] = useState(false);
  const [speedtest, setSpeedtest] = useState(false);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.checked);
  };
  const handleSwitchSpeedtest = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSpeedtest(event.target.checked);
  };

  return (
    <Stack spacing={2} sx={{ marginTop: "20px" }}>
      <Box sx={{ bgcolor: "#d9d9d9", borderRadius: "20px", padding: "20px" }}>
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
        <Card sx={{ borderRadius: "20px" }}>
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
                <FrameTestTop
                  name="Speedtest Ookla"
                  onChange={handleSwitchSpeedtest}
                  checked={speedtest}
                />
                <FrameTestTop
                  name="ISpeed - VNNIC"
                  onChange={handleSwitch}
                  checked={success}
                />
              </TableHead>
            </Table>
          </Box>
        </Card>
      </Box>
      <Box sx={{ bgcolor: "#d9d9d9", borderRadius: "20px", padding: "20px" }}>
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
