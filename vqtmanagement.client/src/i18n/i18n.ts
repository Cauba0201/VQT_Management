import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HOME_EN from "../locales/en/home.json";
// import HOME_VI from "../locales/vi/home.json";

const resources = {
  en: {
    translation: {
      login: "Login",
      username: "Email",
      confirmOTP: "Confirm",
      password: "Password",
      inputOTP: "Input OTP",
      home: "Home",
      titleOTP: "Authenticate account with OTP code",
      descriptionOTP: "OTP code has been sent to your email, please check email!"
    },
    // home: {
    //   HOME_EN,
    // },
  },
  vi: {
    translation: {
      login: "Đăng Nhập",
      username: "Email",
      confirmOTP: "Xác nhận",
      password: "Mật khẩu",
      inputOTP: "Nhập OTP",
      home: "Trang chủ",
      titleOTP: "Xác thực tài khoản bằng mã OTP",
      descriptionOTP: "Mã OTP đã được gửi về email của bạn, vui lòng kiểm tra email của bạn!"

    },
    // home: HOME_VI,
  },
};

// const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // ngôn ngữ mặc định
  //   ns: ['home'],
  //   defaultNS,
  fallbackLng: "vi", // ngôn ngữ dự phòng
  interpolation: {
    escapeValue: false, // react tự động thoát khỏi kí tự đặc biệt
  },
});
