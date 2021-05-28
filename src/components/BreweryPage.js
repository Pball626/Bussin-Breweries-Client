import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
// import {breweryReRoute} from '../actions/BreweryAction'
import {reviewSubmit} from '../actions/ReviewAction'
import {gatherReviews} from '../actions/ReviewAction'

const BreweryPage = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const bName =  props.brewery.name.toLowerCase().split(' ').join('')
    // console.log(bName)
    const bRoute = `${bName}`
    const reviews = useSelector(state => state.reviewsState.reviews.filter(review => review.brewery_id === props.brewery.id))
    console.log(reviews)

    return (
        <div className='column'>
            <div className='card'>
                <ul>
                    <h2>{props.brewery.name}</h2>

                        City: {props.brewery.city}<br />
                        State: {props.brewery.state}<br />
                        Phone Number: {props.brewery.phone ? props.brewery.phone : 'NA'}<br />
                        Website: {props.brewery.website_url ? props.brewery.website_url : 'NA'}<br/>
                        {/* <button onClick={(e) => }>Like</button> */}

                    <h1>Leave a review for your brewery</h1>
                    <div className='submissionfield'>
                        <form onSubmit={(e) => reviewSubmit(e, dispatch, props.history, props.brewery)}>
                            <input type='text' />
                            <button type='submit'>Submit Review</button>
                        </form>
                    </div>
                </ul>
                <ul>
                        {reviews.map(review => <li>{review.text}</li>)}
                </ul>


            </div>
        </div>
    )

}
export default BreweryPage;