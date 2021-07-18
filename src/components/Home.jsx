import React from 'react'
import Header from './Header'
import UserList from './UserList'
import './style.css'

function Home() {
    return (
        <div className="isCenter bg-dark vh-100">
            <div className="container">
                <Header />
                <UserList />
            </div>
        </div>
    )
}

export default Home
