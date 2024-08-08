import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import FullFeaturedCrudGrid from "../../utils/customs/GridOptions";
import { BootstrapDialog } from "../../utils/customs/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";

type DialogOptionButtonProps = {
  tableD: string;
  note: string;
  open: boolean;
  onClose: () => void;
};

const DialogOptionButton = ({
  tableD,
  open,
  onClose,
  note,
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
          sx={{ fontWeight: "bold", ml: "35%", justifyContent: "center" }}
        >
          {tableD}
        </Typography>
      </Box>
      <DialogContent dividers>
        <FullFeaturedCrudGrid />
      </DialogContent>
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
