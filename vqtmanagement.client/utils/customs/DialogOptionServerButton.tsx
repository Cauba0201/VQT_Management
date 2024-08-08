import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
} from "@mui/material";
import { BootstrapDialog } from "../../utils/customs/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";

type DialogOptionServerButtonProps = {
  tableD1: string;
  tableD2: string;
  isOpen: boolean;
  onClose: () => void;
};

const DialogOptionServerButton = ({
  tableD1,
  tableD2,
  isOpen,
  onClose,
}: DialogOptionServerButtonProps) => {
  return (
    <BootstrapDialog aria-labelledby="customized-dialog-title" open={isOpen}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Tùy chỉnh
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CancelIcon sx={{ color: "red" }} />
      </IconButton>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          p: "3px",
        }}
      >
        <Typography
          gutterBottom
          sx={{ fontWeight: "bold", ml: "35%", justifyContent: "center" }}
        >
          {tableD1}
        </Typography>
      </Box>
      <DialogContent dividers>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Khu vực 1: 203.113.152.210"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Khu vực 3: 203.113.186.34"
          />
        </FormGroup>
      </DialogContent>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          p: "3px",
        }}
      >
        <Typography
          gutterBottom
          sx={{ fontWeight: "bold", ml: "35%", justifyContent: "center" }}
        >
          {tableD2}
        </Typography>
        <DialogContent dividers>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Dowload"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Upload"
            />
          </FormGroup>
        </DialogContent>
      </Box>
      <DialogActions >
        <Box>
          <Button
            autoFocus
            onClick={onClose}
            sx={{
              color: "black",
              bgcolor: "#d9d9d9",
              borderRadius: "20px",
              width: "9vw",
            }}
          >
            Save changes
          </Button>
        </Box>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default DialogOptionServerButton;
