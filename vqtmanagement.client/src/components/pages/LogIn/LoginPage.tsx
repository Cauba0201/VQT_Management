import {
  Box, // tạo các box module thành phần
  TextField, //tạo khung cho phép chuyền và chỉnh sửa văn bản ~ input
  Button, // cpn nut bấm
  IconButton, // cpn nút bấm dưới dạng icon
  InputAdornment,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText, // cpn avatar
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

const LoginPage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
  const handleConfirmDialog = () => {
    navigate('/')
  }

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
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
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
          onClick={handleClickOpen}
        >
          {t("login")}
        </Button>
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
              "& > :not(style)": { m: 1, width: "25ch", marginLeft: "20px" },
            }}
          >
            <TextField
              id="outlined-basic"
              label={t("inputOTP")}
              size="small"
              variant="outlined"
              color="error"
            />
            <Button
              variant="contained"
              color="error"
              type="submit"
              sx={{ fontSize: "11px" }}
              endIcon={<SendIcon />}
              onClick={handleConfirmDialog}
            >
              {t("confirmOTP")}
            </Button>
          </Box>
        </Dialog>

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
