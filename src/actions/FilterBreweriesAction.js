// import { useSelector } from "react-redux"


// const FilterBreweries = (e) => {

//     e.preventDefault()

//     let filteredBrewery = {text: e.target[0].value}
//     console.log(filteredBrewery)

//     const breweries = useSelector(state => state.breweriesState.breweries)
//     const breweries = breweries.map(brewry => brewery = {brewry})

//     breweries.filter(brewery => {
//         if(filteredBrewery === '')
//         {return breweries}
//         else {
//             brewery.name.toLowerCase().includes(e.toLowerCase())
//         }
//     }

// }
// export default FilterBreweries;

// fetch('http://localhost:3000/api/v1/breweries', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${localStorage.token}`
//     },
//     body: JSON.stringify({ filterBreweries: filteredBrewery })
// })
// .then(res => res.json())
// .then(data => { console.log(data)
//     localStorage.setItem('token', data.token)
//     dispatch({type: 'FILTER_BREWERIES', filterBreweries: data })})