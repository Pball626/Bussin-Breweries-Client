import { useDispatch } from "react-redux"
import {reviewSubmit} from '../actions/ReviewAction'


const ReviewForm = (props) => {

    return (
     <div>
         <h1>Leave a review for your brewery</h1>
         <div className='submissionfield'>
            <form onSubmit={reviewSubmit}>
                <input type='text'/>
                <button type='submit'>Submit Review</button>
            </form>
         </div>
     </div>
    )
}
export default ReviewForm;