import react, { useState } from "react";

const AuthContext = react.createContext({
    isLoggedin: false,
    setIsLoggedin: () => { }
})

export const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(true)

    return <AuthContext.Provider
        value={{
            isLoggedin: loggedIn,
            setIsLoggedin: setLoggedIn
        }}

    >{props.children}</AuthContext.Provider>
}

export default AuthContext

