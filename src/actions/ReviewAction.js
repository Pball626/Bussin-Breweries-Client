


export const reviewSubmit = (e, dispatch, history, brewery) => {
    
    e.preventDefault()

    let review = {
        text: e.target[0].value,
        rating: e.target[1].value,
        brewery: {name: brewery.name, city: brewery.city, state: brewery.state, website: brewery.website_url, number: brewery.phone, id: brewery.id}
    }
    fetch('http://localhost:3000/api/v1/createreview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({review: review })
    })
    .then(res => res.json())
    .then(data => { 
        // !data.error ? dispatch({type: 'POST_REVIEW', review: data }) : console.log(data.error) 
        dispatch({type: 'POST_REVIEW', review: data })})
        // .catch(console.log())
       
}
export default reviewSubmit;

const handleReviews = (reviews) => {
    return {
        type: 'GET_REVIEWS', reviews: reviews
    }
}

export const gatherReviews = (dispatch) => {
    
// anything after ? is considered a query param as a key: value, can also have another param as well 
    fetch('http://localhost:3000/api/v1/reviews', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(data => {
        dispatch(handleReviews(data))
        })
    // .catch(error.message)
}