import React from 'react'
import {handleLogIn} from '../actions/LogInAction'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'



const LogIn = props => {
    
    const dispatch = useDispatch()
    const logInState = useSelector(state => state.logInState)
        console.log(logInState)
    return (
        <form onSubmit={(e) => 
            {e.preventDefault()
            handleLogIn(e, dispatch, props.history)}
        }>
            <label>Email</label>
            <input type='text' />
            <br/>
            <label>Password</label>
            <input type='password' />
            <br/>
            <input type='Submit' />
        </form>
    )
}


export default LogIn;