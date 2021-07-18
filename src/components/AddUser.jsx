import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from './context/GlobalState'
import { v4 as uuid } from 'uuid'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'


function AddUser() {
    const [name, setName] = useState('')
    const { addUser } = useContext(GlobalContext)
    const history = useHistory()

    const submitHandler = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser)
        history.push('/')
    }
    return (
        <div className=" bg-dark vh-100">
            <Form className="container " onSubmit={submitHandler}>
                <FormGroup className="mb-2">
                    <Label>Name</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <Button>Submit</Button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </Form>
        </div>
    )
}

export default AddUser
