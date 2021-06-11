import {Card} from 'react-bootstrap'
import {useSelector} from 'react-redux'


const ReviewCard = (props) => {
    const reviews = (useSelector(state => state.reviewsState.reviews))
    console.log(reviews)
    
    const breweryReviews = reviews.filter(review => review.brewery.api_id === props.brewery.id)
    console.log(breweryReviews)

    return (
        <Card>
            <Card.Text>{breweryReviews.map(review => <Card><li>{review.text} by: {review.name} </li></Card>)}</Card.Text>
        </Card>
    )
}
export default ReviewCard;