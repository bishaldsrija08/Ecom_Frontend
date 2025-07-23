import React, { useState } from "react";
import TextField from "../../components/TextField";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    };
    return (
        <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
            <p>Forgot Password</p>

            <form onSubmit={handleSubmit} className="border p-2">
                <TextField
                    type="email"
                    id={"email"}
                    label={"Email"}
                    placeholder="Enter your registered Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;