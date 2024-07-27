import "./output.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./components/pages/LogIn/LoginPage";
import SignUpPage from "./components/pages/SignUp/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
