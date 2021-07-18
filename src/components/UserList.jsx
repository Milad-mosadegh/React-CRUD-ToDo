import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalContext } from './context/GlobalState'

import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

function UserList() {
    const { users } = useContext(GlobalContext)
    console.log(users);
    return (
        <ListGroup className="mt-1">
            <ListGroupItem className="d-flex justify-content-between">
                <strong>User One</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-2" to="/edit/1">Edit</Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    )
}

export default UserList
