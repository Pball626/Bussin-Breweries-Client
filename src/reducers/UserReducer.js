


const initialState= {
    users: [],
    user: {}
}
const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'POST_USER':
            // console.log(action)
            return{
                ...state,
                user: action.user
            }
            case 'LOG_IN':
                console.log(action)
                return{
                    ...state,
                    user: action.user
                }
            case 'UPDATE_USER':
                console.log(action)
                return{
                    ...state,
                    user: action.user
                }
            default:
                return state
    }
}
export default UserReducer;