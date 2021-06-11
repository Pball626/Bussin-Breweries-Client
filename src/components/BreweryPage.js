import React from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
// import {breweryReRoute} from '../actions/BreweryAction'
import {reviewSubmit} from '../actions/ReviewAction'
// import {gatherReviews} from '../actions/ReviewAction'
// import {clickedLike} from '../actions/LikeAction'
// import ClickedBrewery from './ClickedBrewery'
// import BreweryRoute from './BreweryRoute'
// import HeaderComponent from './HeaderComponent'
import {Button, Card, Container, CardDeck} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const BreweryPage = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const picsArray = [
        'https://media.istockphoto.com/photos/pouring-a-glass-of-beer-picture-id531705924?k=6&m=531705924&s=612x612&w=0&h=orEIUTv35Y4q96wpmwbs0eQbEMvIOqQfcRWGOUqIwm4=',
        'https://media.istockphoto.com/photos/man-serving-beer-at-a-pub-beer-glass-in-focus-picture-id1289089789?k=6&m=1289089789&s=612x612&w=0&h=NS1xz_FeaF-6YrJXcmTtCTfYaTcrvH-P4aRYDvLjKN0=',
        'https://media.istockphoto.com/photos/female-bartender-wearing-protective-face-mask-serving-a-beer-during-picture-id1293462282?k=6&m=1293462282&s=612x612&w=0&h=uFG_6sQVTlL6ogtsg6TXHvTTq-1Ycbf7Txtx2ge2H-0=',
        'https://media.istockphoto.com/photos/craft-beer-ready-for-service-picture-id892118206?k=6&m=892118206&s=612x612&w=0&h=_FZR7nYXIQwou2R32tGXLXnIr0KpoC3kKQvNg74jYe0=',
        'https://media.istockphoto.com/photos/group-of-friends-enjoyin-drinking-beer-in-the-old-pub-picture-id476944906?k=6&m=476944906&s=612x612&w=0&h=NqGZhhaVV0R6t9lnzjlMJcqrwDjQYos7MYXDjaguBPY=',
        'https://media.istockphoto.com/photos/the-barman-pours-beer-from-the-tap-into-the-glass-picture-id1050442596?k=6&m=1050442596&s=612x612&w=0&h=c4mn7fSeTklL_S7rSrbOG1mqXD3hsQSLnrYyn9S2Klg=',
        'https://media.istockphoto.com/photos/hand-of-bartender-pouring-a-beer-in-tap-picture-id1040888674?k=6&m=1040888674&s=612x612&w=0&h=aFSRm6avOrT95CQvVjeXewrgHBv-mU4nHj0dtLFuWXE=',
        'https://media.istockphoto.com/photos/modern-bar-counter-with-beer-tap-picture-id1142664065?k=6&m=1142664065&s=612x612&w=0&h=hdVeblGnAreMlnR8l5tIqPQbg1-2K2crp75U8GOtrb4=',
        'https://media.istockphoto.com/photos/bartender-man-stretches-out-a-glass-of-beer-picture-id952061998?k=6&m=952061998&s=612x612&w=0&h=jI9DF_LinkVRU0-5FBs2UYsQ3DEhzTn9PlnUQF9FjK8=',
        'https://media.istockphoto.com/photos/enjoying-a-beer-at-the-bar-counter-in-good-company-picture-id1167701610?k=6&m=1167701610&s=612x612&w=0&h=CmK0p-wswkRCRoHYGQR5AjMjuuAVKCpJsp6mCd6lI0o='
    ]
    const randomPic = picsArray[Math.floor(Math.random() * picsArray.length)]
    // items[Math.floor(Math.random() * items.length)]
    // const bName =  props.brewery.name.toLowerCase().split(' ').join('')
    // console.log(bName)
    // const bRoute = `${bName}`
    // const reviews = useSelector(state => state.reviewsState.reviews.filter(review => review.brewery_id === props.brewery.id))
    // console.log(reviews)
    const bRabbit = `/breweries/${props.brewery.id}`

    return (
        <div backgroundimage='https://images.westend61.de/0000888366pw/barrels-in-rack-at-brewery-CAVF28863.jpg'>
                <ul>
                    <CardDeck style={{flex: 1}} >
                    <Container style={{
                    display: 'center', 
                    width: '800px', }}>
                    <Card className='card-style' style={{display: 'flexbox', flexDirection: 'row', backgroundColor: 'orange'}} border='primary'>
                        <Card.Img src={randomPic} style={{display: 'flex', width: '500px', height: '350px', paddingTop: '40px'}}/>
                        <Card.Body>
                        <Card.Title><h2>{props.brewery.name}</h2></Card.Title>
                        <Card.Text>
                        City: {props.brewery.city}<br />
                        State: {props.brewery.state}<br />
                        Phone Number: {props.brewery.phone ? props.brewery.phone : 'NA'}<br />
                        Website: {props.brewery.website_url ? props.brewery.website_url : 'NA'}<br/>
                        </Card.Text>
                        {/* <button onClick={(e) => {e.preventDefault(); +clickedLike(e, dispatch, props.brewery, props.like)}}>Like</button><p>Likes:{props.brewery.likes}</p> */}
                        <Button onClick={(e) => {e.preventDefault(); history.push(bRabbit); console.log(props.brewery.obdb_id)}} >Reviews</Button>
                        
                    <h3>Leave a review for your brewery</h3>
                    <div className='submissionfield'>
                        <form onSubmit={(e) => reviewSubmit(e, dispatch, props.history, props.brewery)}>
                            <textarea type='text' /><br/>
                            <Button type='submit'>Submit Review</Button>
                        </form>
                    </div>
                    </Card.Body>
                    </Card>
                    </Container>
                    </CardDeck>
                </ul>
                
        </div>
    )

}
export default BreweryPage;