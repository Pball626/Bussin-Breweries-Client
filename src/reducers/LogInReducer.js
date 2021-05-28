

const initialState = {
    email: null,
    password: null,
    loggedin: false
}

const LogInReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOG_IN':
            return {
                ...state,
                email: action.email,
                password: action.password,
                loggedin: true
            }
            case 'LOG_OUT':
                return {
                    ...state,
                    email: null,
                    password: null,
                    loggedin: false
                }
            default:
                return state
    }
}
export default LogInReducer