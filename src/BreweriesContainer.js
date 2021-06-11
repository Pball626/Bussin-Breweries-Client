
import {useSelector} from 'react-redux'
import BreweryPage from './components/BreweryPage'
import {useDispatch} from 'react-redux'
import React from 'react'

const BreweriesContainer = (props) => {
    const dispatch = useDispatch()


    const breweries = useSelector(state => state.breweriesState.breweries)
    return(
        <div>
            {/* {breweries && breweries.map(brewery => <BreweryPage key={brewery.id} brewery={brewery}/>)} */}
            {breweries.map(brewery => <BreweryPage key={brewery.id} brewery={brewery}/>)}
            console.log(brewery)
        </div>
        
    )
}
export default BreweriesContainer;