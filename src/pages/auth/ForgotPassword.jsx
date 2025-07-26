import { useState } from "react";
import TextField from "../../components/TextField";
import handlePostOperation from "../../config/handlePostOperation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await handlePostOperation("forgot-password", {
            email
        })
        if (result.status === 200) {
            toast.success(result.data.message)
            localStorage.setItem("email", email)
            setTimeout(() => {
                navigate("/verify-otp", email)
            }, 1000);
        } else {
            toast.error(result?.response?.data?.message)
        }
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