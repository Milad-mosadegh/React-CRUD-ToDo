import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'



function Header() {

    return (
        <div className="shadow">
            <nav className="bg-dark text-light d-flex justify-content-between p-4 ">
                <h2>Wish List / Reminder</h2>
                <Link to="/add" className="btn btn-primary p-2">Add User</Link>
            </nav>
        </div>
    )
}

export default Header
