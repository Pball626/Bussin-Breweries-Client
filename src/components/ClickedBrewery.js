
import ReviewCard from './ReviewCard'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'
import { singleBrewery } from '../actions/BreweryAction'

const ClickedBrewery = (props) => {
    const breweries = (useSelector(state => state.breweriesState.breweries))
    const pathName = props.location.pathname
    const obdb = pathName.split('/')[2]
    const brewery = breweries.find(brew => brew.id === parseInt(obdb))
    const {reviews} = (useSelector(state => state.reviewsState))
    const dispatch = useDispatch()
    // const breweryReviews = reviews.filter(review => review.brewery.api_id === brewery.id)
    // console.log(brewery)
    // useEffect
    // useEffect(() => {
    //     if(!brewery){
    //         singleBrewery(dispatch, obdb)
    //     }
    // }, 
    // [])
    
    return (
        <div>
            <Card>
                {brewery && <h1>{brewery.name}'s Reviews</h1>}
                {brewery && <h3>City: {brewery.city}</h3>}
                {brewery && <h3>State: {brewery.state}</h3>}
                {brewery && <ReviewCard {...props} brewery={brewery}/>}
            </Card>
        </div>
    )
}
export default ClickedBrewery;