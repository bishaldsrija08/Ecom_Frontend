import { useState } from "react";
import TextField from "../../components/TextField";
import handlePostOperation from "../../config/handlePostOperation";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handlePostOperation("http://localhost:3000/api/login", {
            email, password
        })

        if (result.status === 200) {
            alert(result.data.message)
            navigate("/")
        } else {
            alert(result?.response?.data?.message)
        }
        console.log(result)

    };
    return (
        <>
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