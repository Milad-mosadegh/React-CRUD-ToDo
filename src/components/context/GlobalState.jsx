import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


// Make Initial State

const initialState = {
    users: [
        { id: 1, name: "Milad" },
        { id: 2, name: "Nima" },
        { id: 3, name: "Hessam" },
    ]
}


// Make Create Context
export const GlobalContext = createContext(initialState)



// Make Global Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalProvider value={{ users: state.users }}>
            {children}
        </GlobalProvider>
    )
}