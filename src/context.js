import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Hun",
        loggedIn: false,
        color: "blue"
    })
    const logUserIn = () => setUser({...user, loggedIn: true})
    const switchColor =() => setUser({...user, color: "red"})
    return(
    <UserContext.Provider value ={{user, logUserIn, switchColor}}>
    {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider