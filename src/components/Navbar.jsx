import { Link, useLocation } from "react-router-dom"
import { navFields } from "../constants/navField"

const Navbar = () => {
    const location = useLocation();
    const currentTab = location.pathname;
    return (
        <>
            <nav className="flex gap-3 justify-center md:justify-around bg-amber-300 p-2">
                {navFields.map((field) => {
                    return (
                        <Link className={`${field.path === currentTab
                                ? "font-bold text-blue-700 hover:text-blue-400"
                                : "hover:underline hover:underline-offset-2 hover:text-blue-500"
                            } `} key={field.path} to={field.path}>{field.name}</Link>
                    )
                })}

            </nav>
        </>
    )
}

export default Navbar
