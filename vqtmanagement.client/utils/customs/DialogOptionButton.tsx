import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { BootstrapDialog } from "../../utils/customs/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";

type DialogOptionButtonProps = {
  tableD: string;
  note: string;
  open: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const DialogOptionButton = ({
  tableD,
  open,
  onClose,
  note,
  children,
}: DialogOptionButtonProps) => {
  return (
    <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
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
          sx={{
            fontWeight: "bold",
            justifyContent: "center",
            textAlign: "center",
          }}
          variant="h5"
        >
          {tableD}
        </Typography>
      </Box>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Box display="flex">
          <Typography sx={{ fontWeight: "bold", marginRight: "2px" }}>
            Note:
          </Typography>
          <Typography sx={{ fontStyle: "italic" }}>{note}</Typography>
        </Box>
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

export default DialogOptionButton;
