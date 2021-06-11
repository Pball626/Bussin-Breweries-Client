import React from 'react'
import { handleLogIn } from '../actions/LogInAction'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



// const LogIn = props => {

//     const dispatch = useDispatch()
//     const logInState = useSelector(state => state.logInState)
//         console.log(logInState)
//     return (
//         <form onSubmit={(e) => 
//             {e.preventDefault()
//             handleLogIn(e, dispatch, props.history)}
//         }>
//             <label>Email</label>
//             <input type='text' />
//             <br/>
//             <label>Password</label>
//             <input type='password' />
//             <br/>
//             <input type='Submit' />
//         </form>
//     )
// }

const LogIn = props => {

        const dispatch = useDispatch()
        // const logInState = useSelector(state => state.logInState)

    return (
        <Form onSubmit={(e) => 
            {e.preventDefault()
            handleLogIn(e, dispatch, props.history)}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}


export default LogIn;