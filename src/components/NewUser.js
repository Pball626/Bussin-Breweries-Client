import { useDispatch } from 'react-redux'
import {handleSignUp} from '../actions/SignUpAction'


const NewUserForm = (props) => {
    const dispatch = useDispatch()


    return (

        <div className='wrapper'>
            <h1>Create New Profile Below</h1>
            <form onSubmit={(e) => {e.preventDefault(); handleSignUp(e, dispatch, props.history)}}>
                <p>Name</p>
                <input type='text' name='name' placeholder='Enter Name Here' onChange={props.changeHandler} /> <br /> <br />
                <p>Email</p>
                <input type='text' name='email' placeholder='email' onChange={props.changeHandler} /> <br /> <br />
                <p>Password</p>
                <input type='password' name='password' placeholder='password' onChange={props.changeHandler} /> <br /> <br />
                <p>Profile Picture</p>
                <input type='text' name='picture' placeholder='Profile Picture' onChange={props.changeHandler} /> <br /> <br />
                <p>Age</p>
                <input type='text' name='age' placeholder='Age' onChange={props.changeHandler} /> <br /> <br />
                <p>Hometown</p>
                <input type='text' name='hometown' placeholder='Your Hometown' onChange={props.changeHandler} /> <br /> <br />
                <input type="submit" name="submit" value="Create New Profile" className="submit" />
            </form>
        </div>
    )
}

export default NewUserForm;