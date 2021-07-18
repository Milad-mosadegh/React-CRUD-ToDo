import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'



function Header() {
    return (
        <div>
            <nav className="bg-dark text-light d-flex justify-content-between p-4 ">
                <h2>My Team</h2>
                <Link to="/adduser" className="btn btn-primary">Add User</Link>
            </nav>
        </div>
    )
}

export default Header
