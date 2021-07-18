import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import AddUser from './AddUser'
import EditUser from './EditUser'
import Home from './Home'




function App() {
    return (
        <div>
            <Router>
                {/* Here is For Navbar */}

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/adduser" exact component={AddUser} />
                    <Route path="/edituser" exact component={EditUser} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
