import {useDispatch, useSelector} from 'react-redux'


export const HandleEdit = (e, props, history) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.userState.user)

    let updatedUser = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        picture: e.target[3].value,
        age: e.target[4].value,
        hometown: e.target[5].value,
    }

    console.log(user)

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
export default HandleEdit;