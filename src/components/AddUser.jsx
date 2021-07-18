import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from './context/GlobalState'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'


function AddUser() {
    const { addUser } = useContext(GlobalContext)
    const history = useHistory()

    const submitHandler = () => {
        const newUser = {
            id: 4,
            name: "Ali"
        }
        addUser(newUser)
        history.push('/')
    }
    return (
        <div className="container">
            <Form onSubmit={submitHandler}>
                <FormGroup className="mb-2">
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <Button>Submit</Button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </Form>
        </div>
    )
}

export default AddUser
