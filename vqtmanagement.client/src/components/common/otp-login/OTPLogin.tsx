import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import OtpInput from "react-otp-input"

type OtpProps = {
  open: () => void;
};

const OTPLogin = ({ open }: OtpProps) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>{t("titleOTP")}</DialogTitle>
        <DialogContent>{t("descriptionOTP")}</DialogContent>
        <Box
          display="flex"
          justifyContent="space-between"
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "50ch",
              marginLeft: "20px",
              marginRight: "20px",
            },
          }}
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          <Button
            variant="contained"
            color="error"
            type="submit"
            sx={{ fontSize: "11px" }}
            endIcon={<SendIcon />}
            onClick={handleConfirmDialog}
            onSubmit={handleSubmit}
          >
            {t("confirmOTP")} OTP
          </Button>
        </Box>
      </Dialog>
    </div>
  );
};

export default OTPLogin;
