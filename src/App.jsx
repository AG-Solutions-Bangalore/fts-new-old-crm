import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SIgnUp from "./pages/auth/SIgnUp";
import Maintenance from "./pages/maintenance/Maintenance";
import ForgetPassword from "./pages/auth/ForgetPassword";
import DonorList from "./pages/donor/fullList/DonorList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CreateReceipt from "./pages/donor/fullList/CreateReceipt";

import SessionTimeoutTracker from "./components/sessionTimeout/SessionTimeoutTracker";
import BASE_URL from "./base/BaseUrl";
import axios from "axios";
import DisableRightClick from "./components/disableRightClick/DisableRightClick";

const App = () => {
  const navigate = useNavigate();
  const time = localStorage.getItem("token-expire-time");
  const token = localStorage.getItem("token")
  const handleLogout = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/panel-logout`,{}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.code === 200) {
        toast.success(res.data.msg);
        localStorage.clear();
        navigate("/");
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <ToastContainer />
      <DisableRightClick/>   
      <SessionTimeoutTracker expiryTime={time} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SIgnUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/maintenance" element={<Maintenance />} />

     
        {/* donor  */}
        <Route path="/donor-list" element={<DonorList />} />
     
        <Route path="/create-receipts/:id" element={<CreateReceipt />} />
        <Route path="/donor-create/:id" element={<CreateReceipt />} />
        
      </Routes>
    </>
  );
};

export default App;
