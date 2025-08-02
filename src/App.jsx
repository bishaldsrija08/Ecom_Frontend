import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/auth/Home"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import ForgotPassword from "./pages/auth/ForgotPassword"
import VerifyOtp from "./pages/auth/VerifyOtp"
import ResetPassword from "./pages/auth/ResetPassword"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"
import MyContextProvider from "./context/MyContextProvider"
import ErrorPage from "./pages/pages/ErrorPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <MyContextProvider>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
