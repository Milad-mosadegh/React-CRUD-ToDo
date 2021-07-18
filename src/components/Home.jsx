import React from 'react'
import Header from './Header'
import UserList from './UserList'

function Home() {
    return (
        <div className="bg-dark vh-100">
            <div className="container">
                <Header />
                <UserList />
            </div>
        </div>
    )
}

export default Home
