import {BreweryAction} from './actions/BreweryAction'
import {useSelector} from 'react-redux'
import BreweryPage from './components/BreweryPage'
import {useDispatch} from 'react-redux'
import React, {useEffect} from 'react'
import { gatherReviews } from './actions/ReviewAction'
// import {ReviewReducer} from './reducers/ReviewReducer'

const BreweriesContainer = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.token)
        BreweryAction(dispatch)
        gatherReviews(dispatch) 
    }, [])
    const breweries = useSelector(state => state.breweriesState.breweries)
    return(
        <div>
            <button onClick={(e) => {e.preventDefault(); props.history.push('/home')}}>Home</button>
            {breweries.map(brewery => <BreweryPage key={brewery.id} brewery={brewery}/>)}
        </div>
        
    )
}
export default BreweriesContainer;