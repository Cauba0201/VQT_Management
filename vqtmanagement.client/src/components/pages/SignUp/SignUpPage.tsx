import {
  Box, // tạo các box module thành phần
  TextField, //tạo khung cho phép chuyền và chỉnh sửa văn bản ~ input 
  Button, // cpn nut bấm 
  IconButton, // cpn nút bấm dưới dạng icon
  InputAdornment,
  Avatar,// cpn avatar
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import backGroundLogin from "../../../assets/images/background-network.png";
import logo_login from "../../../assets/images/VQT Managementt.png";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
        <Box sx={{ alignItems: "center", marginLeft: "30px", mb: "5px" }}>
          <Avatar
            src={logo_login}
            variant="square"
            sx={{ height: "70px", width: "250px" }}
          />
        </Box>
        <TextField
          fullWidth
          label={t('username')}
          margin="normal"
          color="error"
        />
        <TextField
          fullWidth
          label={t('password')}
          type={showPassword ? "text" : "password"}
          margin="normal"
          color="error"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="error"
          type="submit"
          fullWidth
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          {t("login")}
        </Button>

        <Box
          display="flex"
          justifyContent="space-between"
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            id="outlined-basic"
            label={t('inputOTP')}
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
          >
            {t('getOTP')}
          </Button>
        </Box>
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
