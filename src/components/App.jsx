import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'


import AddUser from './AddUser'
import EditUser from './EditUser'
import Home from './Home'




function App() {
    return (
        <div >
            <GlobalProvider>
                <Router>
                    {/* Here is For Navbar */}

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/add" component={AddUser} />
                        <Route path="/edit/:id" component={EditUser} />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    )
}

export default App
