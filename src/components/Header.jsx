import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function Header() {
    return (
        <div>
            <nav className="bg-dark text-light d-flex justify-content-between p-4 ">
                <h2>My Team</h2>
                <button className="btn btn-primary">Add User</button>
            </nav>
        </div>
    )
}

export default Header
