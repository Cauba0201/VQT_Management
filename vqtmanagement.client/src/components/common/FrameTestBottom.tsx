import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Android12Switch } from "../../../utils/customs/Switch";
import BootstrapButton from "../../../utils/customs/ButtonLower";
// import CancelIcon from "@mui/icons-material/Cancel";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { useState } from "react";
import { currencies, timess } from "../../data/index";
import DialogOptionButton from "../../../utils/customs/DialogOptionButton";

type FrameTestBottomProps = {
  title: string;
  name: string;
  list: string;
  times: string;
  option: string;
  time: string;
  note: string;
  tableD: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const FrameTestBottom = ({
  title,
  name,
  times,
  list,
  option,
  time,
  note,
  tableD,
  children,
}: FrameTestBottomProps) => {
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("disabled");

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography sx={{ fontWeight: "500" }}>
            {title}
          </Typography>
          {name}
          <Android12Switch
            color="primary"
            checked={success}
            onChange={handleSwitch}
            value="dynamic-class-names"
          />
        </TableCell>
        <TableCell>
          <Typography sx={{ fontWeight: "500" }}> {times}</Typography>
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
          <Typography sx={{ fontWeight: "500" }}>{list}</Typography>
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
        </TableCell>
        <TableCell>
          <Box sx={{ marginTop: "23px" }}>
            <BootstrapButton
              variant="contained"
              sx={{ bgcolor: "#d9d9d9", color: "black" }}
              onClick={handleClickOpen}
              disabled={selectedValue !== "edit"}
            >
              {option}
            </BootstrapButton>
            <DialogOptionButton
              open={open}
              onClose={() => setOpen(false)}
              tableD={tableD}
              note={note}
            >
              {children}
            </DialogOptionButton>
          </Box>
        </TableCell>
        <TableCell>
          <Typography sx={{ fontWeight: "500" }}>{time}</Typography>
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
          <PanoramaFishEyeIcon />
          {/* <CheckCircleIcon sx={{ color: "green" }} /> */}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default FrameTestBottom;
