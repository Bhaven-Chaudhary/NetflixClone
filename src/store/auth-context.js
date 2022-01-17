import react, { useState, useEffect } from "react";

const AuthContext = react.createContext({
    isLoggedin: false,
    onLogin: (remember) => { },
    onLogout: () => { }
})

export const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {

        const isLoggedinStatus = localStorage.getItem('isLoggedin');
        if (isLoggedinStatus === '1') {
            setLoggedIn(true);
        }

    }, [])

    const loginHandler = (remember) => {

        if (remember) {
            localStorage.setItem('isLoggedin', '1');
        }

        setLoggedIn(true);
    };

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem('isLoggedin')
    };




    return <AuthContext.Provider
        value={{
            isLoggedin: loggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}

    >{props.children}</AuthContext.Provider>
}

export default AuthContext

