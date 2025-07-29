import { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import handlePostOperation from "../../config/handlePostOperation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import handleGetOperation from "../../config/handleGetOperation";

const ResetPassword = () => {
    const navigate = useNavigate()
    const email = localStorage.getItem("email");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await handlePostOperation("reset-password", { password, email })
        if (result.status === 200) {
            localStorage.clear("email")
            toast.success(result.data.message)
            navigate("/login")
        } else {
            toast.error(result?.response?.data?.message)
        }
        console.log(result)
    };
    useEffect(() => {
        if (!email) {
            navigate("/forgot-password")
        }
        const handleAuth = async () => {
            const result = await handleGetOperation("verify/reset-password")
            if (result.status === 200) {
                toast.success("login vyo")
            } else {
                toast.error("Please follow proper step")
                navigate(-1)
            }
        }
        handleAuth()
    }, [])
    return (
        <>
            <div className="h-screen flex flex-col gap-3 justify-center items-center">
                <p>Reset Password</p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col p-4 gap-2 border border-gray-700"
                >

                    <TextField
                        id={"password"}
                        label={"Password"}
                        value={password}
                        placeholder="Enter your password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        id={"confirmPassword"}
                        label={"Confirm Password"}
                        value={confirmPassword}
                        placeholder={"Enter your confirm password"}
                        type={"password"}
                        required={"true"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ResetPassword;