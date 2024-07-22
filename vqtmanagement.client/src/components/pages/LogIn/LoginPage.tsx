import { useNavigate } from "react-router-dom";
// import LockIcon from "@mui/icons-material/Lock";
import backGroundLogin from "../../../assets/images/backgroud_login.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigateSignup = () => {
    navigate("/sign-up");
  };

  return (
    <div className="relative w-full bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        alt="image-login"
        src={backGroundLogin}
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">
            VQT Management
          </h2>
          <div className=" flex flex-col mb-4">
            <label>Email</label>
            <input type="text" className="border relative bg-gray-100 p-2" />
          </div>
          <div className=" flex flex-col">
            <label>Password</label>
            <input
              type="password"
              className="border relative bg-gray-100 p-2"
            />
          </div>
          <button className="w-full py-3 mt-8 bg-red-600 hover:bg-red-400 text-white relative">
            Đăng nhập
          </button>
          <div className="flex justify-between py-3 mt-8">
            <input
              type="text"
              placeholder="Nhập OTP"
              className="bg-gray-100 border relative p-2"
            />
            <button className="p-3 text-white bg-red-600 hover:bg-red-400">
              Lấy OTP
            </button>
          </div>
          <button onClick={handleNavigateSignup}>sign up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
