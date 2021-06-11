

export const handleSignUp = (e, dispatch, history) => {
    let user = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        picture: e.target[3].value,
        age: e.target[4].value,
        hometown: e.target[5].value,
    }
    console.log(localStorage.token)
    fetch('http://localhost:3000/api/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ user: user })
    })
    .then(res => res.json())
    .then(data => { console.log(data)
        localStorage.setItem('token', data.token)
        dispatch({type: 'LOG_IN', user: data })})
    history.push('/home')
}
export default handleSignUp;

