



export const clickedLike = (e, dispatch, brewery, like) => {
    e.preventDefault()

    fetch(`http://localhost:3000/api/v1/likes?brewery_id.${brewery.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({like})
    })
    .then(res => res.json())
    .then(data => dispatch({type: 'INCREMENT_LIKE', likes: data}))
    .catch(console.log)
}