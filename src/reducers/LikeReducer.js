

const initialState = {
    likes: 0
}

const IncrementLikes = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT_LIKE':
            return {
                ...state,
                likes: action.like 
            }
            return state 
    }
}
export default IncrementLikes;