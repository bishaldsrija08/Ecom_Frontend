import React, { useState } from "react";
import TextField from "../../components/TextField";

const VerifyOtp = () => {
    const [otp, setOtp] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp)
    };
    return (
        <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
            <p>Verify Otp</p>

            <form onSubmit={handleSubmit} className="border p-2">
                <TextField
                    type="text"
                    id={"otp"}
                    label={"OTP"}
                    placeholder={"Enter your OTP"}
                    onChange= {(e)=>{setOtp(e.target.value)}}
                    value={otp}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VerifyOtp;