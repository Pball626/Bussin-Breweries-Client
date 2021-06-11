import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {logOut} from '../actions/LogInAction'


const LogOut = (props) => {
    const dispatch = useDispatch()

    return (
        <Button onClick={() => logOut(dispatch, props.history)}>
            Logout
        </Button>
    )
}
export default LogOut;