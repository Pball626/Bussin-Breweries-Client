


const initialState = {
    reviews: []
}

export const ReviewReducer = (state = initialState, action) => {
    switch(action.type){
        case 'POST_REVIEW':
            // console.log(action)
            return{
                ...state,
                reviews: [...state.reviews, action.review]
            }
            //make case to get all reviews and to set state for reviews as well
            case 'GET_REVIEWS':
                console.log(action)
                return {
                    ...state,
                    reviews: action.reviews
                }
            default:
                return state
    }
}
export default ReviewReducer