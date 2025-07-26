import React, { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import handlePostOperation from "../../config/handlePostOperation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyOtp = () => {
    const email = localStorage.getItem("email");
    const navigate = useNavigate()
    const [otp, setOtp] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await handlePostOperation("verify-otp", {
            otp, email
        })
        if (result.status === 200) {
            toast.success(result.data.message)
            navigate("/reset-password")
        } else {
            toast.error(result?.response?.data?.message)
        }
    };

    useEffect(() => {
        if (!email) {
            navigate("/forgot-password")
        }
    },[])
    return (
        <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
            <p>Verify Otp</p>

            <form onSubmit={handleSubmit} className="border p-2">
                <TextField
                    type="text"
                    id={"otp"}
                    label={"OTP"}
                    placeholder={"Enter your OTP"}
                    onChange={(e) => { setOtp(e.target.value) }}
                    value={otp}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VerifyOtp;