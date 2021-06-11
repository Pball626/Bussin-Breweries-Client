

export const profileAction = (dispatch) => {

    fetch('http://localhost:3000/api/v1/usertoken', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(data => {console.log(data)
        dispatch({type: 'POST_USER', user: data.user })})
}
export default profileAction;
