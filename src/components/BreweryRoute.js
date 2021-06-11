import React from 'react'
import ClickedBrewery from './ClickedBrewery'
import {Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

function BreweryRoute(props) {
    console.log(props.brewerylink)
    // const test = useSelector(state => state.breweriesState.breweries)
    const route = `/${props.brewerylink}`
    return (
        <div>
            <Route path= {route} exact component = {<ClickedBrewery brewery={props.brewery} />} />
            {props.history.push({route})}
        </div>
    )
}

export default BreweryRoute
