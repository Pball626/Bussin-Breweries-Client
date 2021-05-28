import React, { Component } from 'react'

function UserProfilePage() {
    {
        return (
            <div>
                <h1 className="center" >{props.user.name}'s Profile</h1>
                <h3 className="center">Email: {props.user.email}</h3>
                <h3 className="center">Home Town: {props.user.hometown}</h3>
                <img className='photo' src={props.user.picture} /> <br />
                <h3 className='center'>Age: {props.user.age}</h3>
                <button onClick={handleClick} className='del-btn'>Delete Profile</button>
            </div>
        )
    }
};
export default UserProfilePage;