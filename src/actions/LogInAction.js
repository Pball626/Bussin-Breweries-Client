export const handleLogIn = (e, dispatch, history) => {
    let user = {
        email: e.target[0].value,
        password: e.target[1].value
    }
    
    let reqPackage = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ auth: user })
    }
    fetch('http://localhost:3000/api/v1/login', reqPackage)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
            dispatch({ type: 'LOG_IN', user: data })
            { data.token ? history.push('/home') : history.push('/login') }
        })
}

export const logOut = (dispatch, history) => {
    localStorage.clear()
    dispatch({type: 'LOG_OUT'})
    {history.push('/login')}
}