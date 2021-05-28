


const initialState= {
    users: [],
    currentUser: {}
}
const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'POST_USERS':
            console.log(action)
            return{
                ...state,
                currentUser: action.user
            }
            default:
                return state
    }
}
export default UserReducer;