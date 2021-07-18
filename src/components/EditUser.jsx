import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from './context/GlobalState'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

function EditUser(props) {
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: ""
    })

    const currentUserId = props.match.params.id
    const { editUser, users } = useContext(GlobalContext)
    const history = useHistory()

    useEffect(() => {
        const userId = currentUserId
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])


    const submitHandler = () => {
        editUser(selectedUser)
        history.push('/')
    }
    return (
        <div className="vh-100 bg-dark">
            <Form className="container shadow p-5" onSubmit={submitHandler}>
                <FormGroup className="mb-2">
                    <Label>Name</Label>
                    <Input name="name" value={selectedUser.name} onChange={(e) => setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })} type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <Button>Edit Name</Button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </Form>
        </div>
    )
}

export default EditUser
