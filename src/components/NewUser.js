import { useDispatch } from 'react-redux'
import { handleSignUp } from '../actions/SignUpAction'
import { Button, Form, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


// const NewUserForm = (props) => {
//     const dispatch = useDispatch()


//     return (

//         <div className='wrapper'>
//             <h1>Create New Profile Below</h1>
//             <form onSubmit={(e) => {e.preventDefault(); handleSignUp(e, dispatch, props.history)}}>
//                 <p>Name</p>
//                 <input type='text' name='name' placeholder='Enter Name Here' onChange={props.changeHandler} /> <br /> <br />
//                 <p>Email</p>
//                 <input type='text' name='email' placeholder='email' onChange={props.changeHandler} /> <br /> <br />
//                 <p>Password</p>
//                 <input type='password' name='password' placeholder='password' onChange={props.changeHandler} /> <br /> <br />
//                 <p>Profile Picture</p>
//                 <input type='text' name='picture' placeholder='Profile Picture' onChange={props.changeHandler} /> <br /> <br />
//                 <p>Age</p>
//                 <input type='text' name='age' placeholder='Age' onChange={props.changeHandler} /> <br /> <br />
//                 <p>Hometown</p>
//                 <input type='text' name='hometown' placeholder='Your Hometown' onChange={props.changeHandler} /> <br /> <br />
//                 <input type="submit" name="submit" value="Create New Profile" className="submit" />
//             </form>
//         </div>
//     )
// }

// export default NewUserForm;

const NewUserForm = (props) => {
    const dispatch = useDispatch()


    return (
        <Form onSubmit={(e) => { e.preventDefault(); handleSignUp(e, dispatch, props.history) }}>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridPicture">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control placeholder="Picture Url" />
            </Form.Group>

            <Form.Group controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Age" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder='city' />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridHomeTown">
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder='state'>
                    </Form.Control>
                </Form.Group>
            </Form.Row><br />

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default NewUserForm;