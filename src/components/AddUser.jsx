import React from 'react'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'


function AddUser() {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="Enter Your Name" />
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddUser
