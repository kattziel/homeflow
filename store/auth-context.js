import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {}
    // default values
});

function AuthContextProvider({children}) {
    //wrapper around other components

    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token);
    }
    // verifying whether we signed up / logged in successfully

    function logout() {
        setAuthToken(null);
    }
    // getting rid of token

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        // used only to render conditionally the screens in app.js
        authenticate: authenticate,
        logout: logout
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;