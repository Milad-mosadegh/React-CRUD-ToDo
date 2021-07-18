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
    const { users, removeUser } = useContext(GlobalContext)
    console.log(users);
    return (
        <ListGroup className="mt-1">
            {users.map(result => (
                <ListGroupItem key={result.id} className="d-flex justify-content-between">
                    <strong>{result.name}</strong>
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-2" to={`/edit/${result.id}`}>Edit</Link>
                        <Button onClick={() => removeUser(result.id)} color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default UserList
