import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import BreweryReducer from './reducers/BreweryReducer'
import LogInReducer from './reducers/LogInReducer'
import ReviewReducer from './reducers/ReviewReducer'
import UserReducer from './reducers/UserReducer'

const rootReducer = combineReducers({
    loginState: LogInReducer,
    breweriesState: BreweryReducer,
    reviewsState: ReviewReducer,
    userState: UserReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))
export default store;