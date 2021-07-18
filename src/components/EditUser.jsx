import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

function EditUser() {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter Your Name" />
                    <Button>Edit Name</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default EditUser
