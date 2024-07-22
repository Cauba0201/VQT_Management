import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HOME_EN from "../locales/en/home.json";
// import HOME_VI from "../locales/vi/home.json";

const resources = {
  en: {
    translation: {
      login: "Login",
      username: "User Name",
      getOTP: "Get OTP",
      password: "Password",
      inputOTP: "Input OTP",
      home: "Home"
    },
    // home: {
    //   HOME_EN,
    // },
  },
  vi: {
    translation: {
      login: "Đăng Nhập",
      username: "Tên đăng nhập",
      getOTP: "Lấy OTP",
      password: "Mật khẩu",
      inputOTP: "Nhập OTP",
      home: "Trang chủ"
    },
    // home: HOME_VI,
  },
};

// const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",// ngôn ngữ mặc định
//   ns: ['home'],
//   defaultNS,
  fallbackLng: "vi", // ngôn ngữ dự phòng 
  interpolation: {
    escapeValue: false, // react tự động thoát khỏi kí tự đặc biệt
  },
});
