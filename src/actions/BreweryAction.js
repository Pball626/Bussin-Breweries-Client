

export const BreweryAction = (dispatch) => {

    fetch('http://localhost:3000/api/v1/brewerieslist', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'GET_BREWERIES', breweries: data})
        })
};

export const breweryReRoute = (e, history, bRoute) => {
    history.push(bRoute) 
}

export const singleBrewery = (dispatch, brewery_id) => {
    fetch(`http://localhost:3000/api/v1/breweries/${brewery_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'SINGLE_BREWERY', breweries: data})
            console.log(data)
        })
};