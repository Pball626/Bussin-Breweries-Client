import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import BreweryReducer from './reducers/BreweryReducer'
import LogInReducer from './reducers/LogInReducer'
import ReviewReducer from './reducers/ReviewReducer'

const rootReducer = combineReducers({
    loginState: LogInReducer,
    breweriesState: BreweryReducer,
    reviewsState: ReviewReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))
export default store;