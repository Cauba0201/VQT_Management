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
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
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
    const passwordTest = "1";
    const OTPTest = 123456;
  
    const validateEmailAndPassword = (email: string, password: string) => {
      return accountsTest.includes(email) && password === passwordTest;
    };
  
    const handleEmailVerification = () => {
      if (validateEmailAndPassword(email, password)) {
        setOpen(true);
        setError(""); // Reset error nếu email và mật khẩu hợp lệ
      } else {
        setError("Email hoặc mật khẩu không đúng");
        setOpen(false); // Đóng dialog nếu email hoặc mật khẩu không hợp lệ
      }
    };
  
    const handleOTPverified = () => {
      if (parseInt(otp) === OTPTest) {
        navigate("/");
      } else {
        setError("OTP không đúng");
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
                .email("Phải là email hợp lệ")
                .max(255)
                .required("Email là bắt buộc"),
              password: Yup.string().max(255).required("Mật khẩu là bắt buộc"),
            })}
          >
            {({ errors, handleBlur, handleChange, touched, values }) => (
              <form>
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  sx={{ marginBottom: "20px" }}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    Mật khẩu
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => setPassword(e.target.value)}
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
                    label="Mật khẩu"
                    inputProps={{}}
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
                {error && <FormHelperText error>{error}</FormHelperText>}
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
            {t("Đăng nhập")}
          </Button>
          <form>
            <Dialog open={open}>
              <DialogTitle>{t("Xác nhận OTP")}</DialogTitle>
              <DialogContent>{t("Nhập mã OTP đã được gửi đến email của bạn")}</DialogContent>
              <Box
                display="flex"
                justifyContent="space-between"
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    marginLeft: "20px",
                    marginRight: "20px",
                    width: { xs: "100%", sm: "auto" },
                  },
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
                  sx={{ fontSize: "11px", width: "100%" }}
                  endIcon={<SendIcon />}
                  onClick={handleOTPverified}
                >
                  {t("Xác nhận")} OTP
                </Button>
              </Box>
            </Dialog>
          </form>
  
          {/* Chuyển đổi ngôn ngữ */}
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
  