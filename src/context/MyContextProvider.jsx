import { Children, createContext, useContext } from "react"

const MyContext = createContext()
export const useMyContext = () => useContext(MyContext)
const MyContextProvider = ({ children }) => {
    const name = "Bishal"
    const fruits = ["Apple", "Mango", "Banana"]
    return (
        <>
            <MyContext.Provider value={{ name, fruits }}>{children}</MyContext.Provider>
        </>
    )
}

export default MyContextProvider
