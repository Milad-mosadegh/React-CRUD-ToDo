import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


// Make Initial State

const initialState = {
    users: []
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

    // Make Action for Add User
    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }


    // Make Action for Edit UserList
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }
    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}