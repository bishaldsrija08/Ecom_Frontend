import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="flex gap-3 md:justify-center justify-between lg:justify-around border-2 border-gray-400 px-6 py-2 flex-wrap bg-red-500 md:bg-green-400">
                <Link to={"/"}>Home</Link>
                <Link to={"/register"}>Register</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/forgot-password"}>Forgot-password</Link>
                <Link to={"/verify-otp"}>Verify-otp</Link>
                <Link to={"/reset-password"}>Reset-password</Link>
            </nav>
        </>
    )
}

export default Navbar
