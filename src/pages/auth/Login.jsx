import { useState } from "react";
import TextField from "../../components/TextField";
import handlePostOperation from "../../config/handlePostOperation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMyContext } from "../../context/MyContextProvider";

const Login = () => {
    const { name, fruits } = useMyContext()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handlePostOperation("login", {
            email, password
        })

        if (result.status === 200) {
            localStorage.setItem("authToken", result.data.token);
            toast.success(result.data.message)
            localStorage.setItem("authToken", result.data.token)
            navigate("/")
        } else {
            toast.error(result?.response?.data?.message)
        }

    };
    return (
        <>
            {name}
            <br />
            {fruits[0]}
            <div className="h-screen flex flex-col gap-3 justify-center items-center">
                <p>Login</p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col p-4 gap-2 border border-gray-700"
                >
                    <TextField
                        id={"email"}
                        label={"Email"}
                        value={email}
                        placeholder={"Enter your email"}
                        type={"email"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id={"password"}
                        label={"Password"}
                        value={password}
                        placeholder="Enter your password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Login;