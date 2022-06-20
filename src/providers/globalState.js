import React, { useState } from "react";

export const GlobalState = React.createContext({})

export const GlobalProvider = (props) => {
    const [user, setUser] = useState(undefined)

    const userData = {
        response: {},
        repos: []
    }

    return (
        <GlobalState.Provider value={{ userData, setUser }}> 
            {props.children}
        </GlobalState.Provider>
    )
}