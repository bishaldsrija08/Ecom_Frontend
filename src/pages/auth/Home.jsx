import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const authToken = localStorage.getItem("authToken")
  useEffect(()=>{
    if(!authToken){
      navigate("/login")
    }
  })
  return (
    <>
        <div>Home</div>;
    </>
  )
};

export default Home;