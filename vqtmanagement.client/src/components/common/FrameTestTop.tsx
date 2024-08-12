import { TableCell, TableRow, TextField } from "@mui/material";
import React from "react";
import { Android12Switch } from "../../../utils/customs/Switch";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { configs, cities } from "../../data/index";

type FrameProps = {
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FrameTestTop = ({ name, checked, onChange }: FrameProps) => {
  return (
    <TableRow>
      <TableCell>
        {name}
        <Android12Switch
          color="primary"
          checked={checked}
          onChange={onChange}
          value="dynamic-class-names"
        />
      </TableCell>
      <TableCell>
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
        <TextField
          id="outlined-select-currency-native"
          select
          defaultValue="auto"
          size="small"
          SelectProps={{
            native: true,
          }}
        >
          {configs.map((option) => (
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
  );
};

export default FrameTestTop;
