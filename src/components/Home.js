import React from 'react'
import {logOut}from '../actions/LogInAction'
import {useDispatch} from 'react-redux'

const Home = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Home</h1>
            <button onClick={(e) => {e.preventDefault(); props.history.push('/breweries') }}>Breweries</button>
            <button onClick={() => logOut(dispatch, props.history)}>Log Out</button>

        </div>
    )
}

export default Home
