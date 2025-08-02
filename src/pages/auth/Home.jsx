import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import handleGetOperation from "../../config/handleGetOperation";
import { toast } from "react-toastify";
import { useMyContext } from "../../context/MyContextProvider";

const Home = () => {
  const {name, fruits} = useMyContext()
  const navigate = useNavigate()
  const authToken = localStorage.getItem("authToken")
  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    }
    const handleAuth = async () => {
      const result = await handleGetOperation("verify/home")
      if (result.status === 200) {
        toast.success("login vyo")
      } else {
        toast.error("Plese follow proper steps")
        navigate("/login")
      }
    }
    handleAuth()
  })
  return (
    <>
    {name}
    {fruits}
      <div>Home</div>;
    </>
  )
};

export default Home;