import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import handleGetOperation from "../../config/handleGetOperation";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate()
  const authToken = localStorage.getItem("authToken")
  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    }
    const handleHome = async () => {
      const result = await handleGetOperation("verify/home")
      if (result.status === 200) {
        toast.success("login vyo")
      } else {
        toast.error("Plese login to procede")
        navigate("/login")
      }
    }
    handleHome()
  })
  return (
    <>
      <div>Home</div>;
    </>
  )
};

export default Home;