import { useState } from "react";
import TextField from "../../components/TextField";
import handlePostOperation from "../../config/handlePostOperation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await handlePostOperation("register", {
            email, userName, password, confirmPassword
        })

        if (result.status === 200) {
            toast.success(result.data.message)
            navigate("/login")
        } else {
            toast.error(result?.response?.data?.message)
        }

    };

    return (
        <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
            <p>Register</p>

            <form onSubmit={handleSubmit} className="border p-2">
                <TextField
                    id={"email"}
                    label={"Email"}
                    type="email"
                    value={email}
                    placeholder={"Enter your email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id={"username"}
                    label={"Username"}
                    value={userName}
                    placeholder={"Enter your username"}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id={"phone"}
                    label={"Phone Number"}
                    value={phone}
                    placeholder={"Enter your Phone Number"}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    id={"password"}
                    label={"Password"}
                    placeholder={"**********"}
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    id={"confirmPassword"}
                    label={"Confirm Password"}
                    placeholder={"**********"}
                    value={confirmPassword}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;