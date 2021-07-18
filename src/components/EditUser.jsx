import React from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

function EditUser() {
    return (
        <div className="container">
            <Form>
                <FormGroup className="mb-2">
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <Button>Edit Name</Button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </Form>
        </div>
    )
}

export default EditUser
