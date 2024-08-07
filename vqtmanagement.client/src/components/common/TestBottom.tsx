import {
  Box,
  Button,
  Card,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { BootstrapButton } from "../../../utils/customs/ButtonLower";
import { Android12Switch } from "../../../utils/customs/Switch";
import { BootstrapDialog } from "../../../utils/customs/Dialog";

const currencies = [
  {
    value: "none",
    label: "----",
  },
  {
    value: "default",
    label: "Mặc định",
  },
  {
    value: "edit",
    label: "Tùy chỉnh",
  },
];

const cities = [
  { value: "none", label: "---Time---" },
  { value: "10", label: "10 ms" },
  { value: "20", label: "20 ms" },
  { value: "30", label: "30 ms" },
  { value: "40", label: "40 ms" },
  { value: "50", label: "50 ms" },
  { value: "60", label: "60 ms" },
  { value: "70", label: "70 ms" },
  { value: "80", label: "80 ms" },
];

const TestBottom = () => {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ borderRadius: "10px" }}>
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Bài đo Website
                </Typography>
                Web Loading Time
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
                  placeholder="3000"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Danh sách trang Website
                </Typography>
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
                <Box sx={{ marginTop: "23px" }}>
                  <BootstrapButton
                    variant="contained"
                    sx={{ bgcolor: "#d9d9d9", color: "black" }}
                    onClick={handleClickOpen}
                    // disabled
                  >
                    Tùy chỉnh
                  </BootstrapButton>
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle
                      sx={{ m: 0, p: 2 }}
                      id="customized-dialog-title"
                    >
                      Modal title
                    </DialogTitle>
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                      <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </Typography>
                      <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </Typography>
                      <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Save changes
                      </Button>
                    </DialogActions>
                  </BootstrapDialog>
                </Box>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Time test (ms)
                </Typography>
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
                <Typography sx={{ fontWeight: "500" }}>Trạng thái</Typography>
                <PanoramaFishEyeIcon />
                {/* <CheckCircleIcon sx={{ color: "green" }} /> */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Bài đo Website
                </Typography>
                Video Streaming
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
                  placeholder="3000"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Danh sách trang Video
                </Typography>
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
                <Box sx={{ marginTop: "23px" }}>
                  <BootstrapButton
                    variant="contained"
                    sx={{ bgcolor: "#d9d9d9", color: "black" }}
                    disabled
                  >
                    Tùy chỉnh
                  </BootstrapButton>
                </Box>
              </TableCell>

              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Time test (ms)
                </Typography>
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
                <Typography sx={{ fontWeight: "500" }}>Trạng thái</Typography>
                <PanoramaFishEyeIcon />
                {/* <CheckCircleIcon sx={{ color: "green" }} /> */}
              </TableCell>
            </TableRow>
          </TableHead>
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
                    disabled
                  >
                    Tùy chỉnh
                  </BootstrapButton>
                </Box>
              </TableCell>

              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>
                  Time test (ms)
                </Typography>
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
                <Typography sx={{ fontWeight: "500" }}>Trạng thái</Typography>
                {/* <PanoramaFishEyeIcon /> */}
                <CheckCircleIcon sx={{ color: "green" }} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>Bài đo</Typography>
                Ping
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
                  placeholder="3000"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>Địa chỉ</Typography>
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
                <Box sx={{ marginTop: "23px" }}>
                  <BootstrapButton
                    variant="contained"
                    sx={{ bgcolor: "#d9d9d9", color: "black" }}
                    disabled
                  >
                    Tùy chỉnh
                  </BootstrapButton>
                </Box>
              </TableCell>

              <TableCell>
                <Box sx={{ width: "110px" }}>
                  <Typography sx={{ fontWeight: "500" }}>Số gói tin</Typography>
                  <TextField
                    id="outlined-number"
                    type="number"
                    placeholder="100"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "500" }}>Trạng thái</Typography>
                <PanoramaFishEyeIcon />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Box>
    </Card>
  );
};

export default TestBottom;
