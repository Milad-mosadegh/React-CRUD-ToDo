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


    // Make Action for Reucer
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{ users: state.users, removeUser }}>
            {children}
        </GlobalContext.Provider>
    )
}