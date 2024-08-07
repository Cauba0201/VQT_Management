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
    TextField,
  } from "@mui/material";
  import { Visibility, VisibilityOff } from "@mui/icons-material";
  import { useState } from "react";
  import backGroundLogin from "../../../assets/images/background_light_2023.jpg";
  import logo_login from "../../../assets/images/VQT Managementt.png";
  import SendIcon from "@mui/icons-material/Send";
  import { useTranslation } from "react-i18next";
  import * as Yup from "yup";
  import { Formik } from "formik";
  import { useNavigate } from "react-router-dom";
  import { Audio } from "react-loader-spinner";
  import OtpInput from "react-otp-input";
  
  // import OTPLogin from "../../common/otp-login/OTPLogin";
  
  const LoginPage = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
      event.preventDefault();
    };
    const handleChangeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };
    const handleClickOpen = () => {
      setOpen(true);
    };
    // const handleClickClose = () => {
    //   setOpen(false)
    // };
    const handleConfirmDialog = () => {
      navigate("/");
    };
    const handleSubmit = (event: () => void) => {
      event.preventDefault();
  
      // email vailidate
  
      // Call BE API
    };
    const validateEmail = (email: string) => {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      return isValidEmail;
    };
    const handleEmailVerification = () => {
      if (validateEmail(email)) {
        setLoading(true);
        setTimeout(() => {
          setIsEmailVerified(true);
          setLoading(false);
          setError("");
        }, 2000);
      } else {
        setError("Invalid Email");
      }
    };
    const handleOTPverified = () => {
      const enterOTP = otp.join("");
      if (/^\d{4}$/.test(enterOTP)) {
        const username =
          email.split("@")[0].charAt(0).toUpperCase() +
          email.split("@")[0].slice(1);
        onLogin(username);
      } else {
        setError("Incorrect OTP");
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
        >
          {!isEmailVerified ? ( 
        <Box sx={{ alignItems: "center", marginLeft: "30px", mb: "5px" }}>
          <Avatar
            src={logo_login}
            variant="square"
            sx={{ height: "70px", width: "250px" }}
          />
        </Box>
        {/* login form */}
        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
          })}
        >
          {({ errors, handleBlur, handleChange, touched, values }) => (
            <form>
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
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  inputProps={{}}
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
              >
                <InputLabel htmlFor="outlined-adornment-password-login">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
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
                {/* {error && <span className="otp-error">{error}</span>} */}
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
          {loading ? (
            <Audio color="#ffffff" height={50} width={50} />
          ) : (
            "Đăng nhập"
          )}
        </Button>
        {/* dialog */}): (<form>
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
        </form>)}
         
  
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
  function onLogin(username: string) {
    throw new Error("Function not implemented.");
  }
  ////////////////////////////////////////////////////////////////////////
  <Box gridColumn="span 8" gridRow="span 4" bgcolor={colors.white[100]}>
  <Box
    display="flex"
    gridTemplateColumns="repeat(10, 1fr)"
    gridAutoRows="130px"
    gap="20px"
  >
    <Grid item xs={12} md={8}>
      {/* <Paper elevation={3} sx={{ marginLeft: "20px", width: "620px" }}> */}
        <Typography
          variant="h6"
          component="div"
          m="20px"
          ml="30px"
          gutterBottom
          fontWeight="bold"
        >
          Order Timeline
        </Typography>
        <Divider/>
        <List>
          {orderTimelineItems.map((item, index) => (
            <OrderTimeLineItem
              key={index}
              status={item.status}
              time={item.time}
              color={item.color}
            />
          ))}
        </List>
      {/* </Paper> */}
    </Grid>
  </Box>
</Box>