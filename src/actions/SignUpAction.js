

export const handleSignUp = (e, dispatch, history) => {
    let user = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        picture: e.target[3].value,
        age: e.target[4].value,
        hometown: e.target[5].value,
    }

    fetch('http://localhost:3000/api/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({ user: user })
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('token', data.token)
        dispatch({type: 'POST_USERS', users: data })})
    history.push('/home')
}
export default handleSignUp;

