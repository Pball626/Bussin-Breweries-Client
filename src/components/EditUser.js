import { Button, Form } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import HandleEdit from '../actions/UpdateProfileAction'


const EditUser = (props) => {
    const user = useSelector((state) => state.userState.user)
    const dispatch = useDispatch()
    console.log(user)
    const HandleEdit = (e, props, history) => {

        let updatedUser = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            picture: e.target[3].value,
            age: e.target[4].value,
            hometown: e.target[5].value,
        }
    
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({ user: updatedUser })
        })
        .then(res => res.json())
        .then(data => { console.log(data)
            dispatch({type: 'UPDATE_USER', user: data })})
        history.push('/userprofilepage')
    }

    return (
        <Form onSubmit={(e) => {e.preventDefault(); HandleEdit(e, dispatch, props.history)}}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Updated Name</Form.Label>
                <Form.Control type="name" placeholder="Updated Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPicture">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="picture" placeholder="Picture Url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="age" placeholder="New Age" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicHometown">
                <Form.Label>Updated City</Form.Label>
                <Form.Control type="hometown" placeholder="City" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default EditUser;