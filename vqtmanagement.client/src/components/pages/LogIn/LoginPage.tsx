import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import * as Yup from "yup";
import OTPInput from "react-otp-input";
import backGroundLogin from "../../../assets/images/background_light_2023.jpg";
import logo_login from "../../../assets/images/VQT_Management.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const accountsTest = ["annguyen@viettel.com.vn", "thinhlv@viettel.com.vn"];
  const passwordTest = "a";
  const OTPTest = 123456;

  // const validateEmail = (email: string) => {
  //   const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
  //     email
  //   );
  //   return isValidEmail;
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateEmail = (email: string, password: any) => {
    return accountsTest.includes(email) && password === passwordTest;
  };

  // const handleEmailVerification = () => {
  //   if (validateEmail(email)) {
  //     setOpen(true);
  //     //setTimeout(() => {
  //     //  setError("");
  //     //}, 2000);

  //   } else {
  //     setError("Invalid Email");
  //   }
  // };

  // const handleOTPverified = () => {
  //   const enterOTP = otp;
  //   if (/^\d{6}$/.test(enterOTP)) {
  //     navigate("/");
  //   } else {
  //     setError("Incorrect OTP");
  //   }
  // };

  const handleEmailVerification = () => {
    if (validateEmail(email, password)) {
      setOpen(true);
      setError("");
    } else {
      setError("Email hoặc mật khẩu không đúng!");
      setOpen(false);
    }
  };

  const handleOTPverified = (event: { preventDefault: () => void }) => {
    if (parseInt(otp) === OTPTest) {
      navigate("/");
    } else {
      event.preventDefault();
      setError("OTP không đúng, vui lòng nhập lại!");
      setOtp("");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
      sx={{
        backgroundImage: `url(${backGroundLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        bgcolor="white"
        p={4}
        borderRadius={5}
        boxShadow={3}
        width="100%"
        maxWidth="380px"
        sx={{
          width: { xs: "90%", sm: "80%", md: "60%", lg: "40%", xl: "30%" },
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ alignItems: "center", marginLeft: "30px", mb: "5px" }}>
          <Avatar
            src={logo_login}
            variant="square"
            sx={{ height: "70px", width: "250px" }}
          />
        </Box>
        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Email không hợp lệ")
              .max(255)
              .required("Email là trường bắt buộc"),
            password: Yup.string()
              .max(255)
              .required("Mật khẩu là trường bắt buộc"),
          })}
          onSubmit={(_values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ errors, handleBlur, touched, setFieldValue }) => (
            <form>
              <Box
                sx={{
                  mb: "20px",
                  bgcolor: "#fef0f0",
                  color: "#d32f2f",
                  borderRadius: "5px",
                  paddingLeft: "12%",
                }}
              >
                {error && <span className="otp-error">{error}</span>}
              </Box>

              <FormControl
                fullWidth
                error={Boolean(touched.email && errors.email)}
                sx={{ marginBottom: " 20px" }}
              >
                <InputLabel htmlFor="outlined-adornment-email-login">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-login"
                  type="email"
                  value={email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setFieldValue("email", e.target.value);
                    if (error) setError("");
                  }}
                  label="Email"
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                fullWidth
                error={Boolean(touched.password && errors.password)}
                sx={{ marginBottom: "10px" }}
              >
                <InputLabel htmlFor="outlined-adornment-password-login">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setFieldValue("password", e.target.value);
                    if (error) setError("");
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />

                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
            </form>
          )}
        </Formik>
        <Button
          variant="contained"
          color="error"
          type="submit"
          fullWidth
          sx={{
            mt: 2,
            mb: 2,
          }}
          onClick={handleEmailVerification}
        >
          {t("login")}
        </Button>
        <form>
          <Dialog open={open}>
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {t("titleOTP")}
            </DialogTitle>
            <DialogContent>{t("descriptionOTP")}</DialogContent>
            <Box sx={{ marginLeft: "20px", color: "#d32f2f" }}>
              {error && <span className="otp-error">{error}</span>}
            </Box>
            <Box
              display="flex"
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  marginLeft: "20px",
                  marginRight: "20px",
                  width: { xs: "92%", sm: "auto" },
                },
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "flex-end" },
              }}
            >
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 0.2rem",
                  fontSize: "1.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ced4da",
                }}
                renderInput={(props) => <input {...props} />}
              />

              <Button
                variant="contained"
                color="error"
                type="submit"
                sx={{
                  fontSize: "11px",

                  width: "100%",
                }}
                endIcon={<SendIcon />}
                onClick={handleOTPverified}
              >
                {t("confirmOTP")} OTP
              </Button>
            </Box>
          </Dialog>
        </form>

        {/* chuyen doi ngon ngữ */}
        <Box display="flex" justifyContent="center" mt="20px" gap={1}>
          <Button
            color="error"
            variant="outlined"
            size="small"
            onClick={() => handleChangeLanguage("vi")}
          >
            VI
          </Button>
          <Button
            color="error"
            variant="outlined"
            size="small"
            onClick={() => handleChangeLanguage("en")}
          >
            EN
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
