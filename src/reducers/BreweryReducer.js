

const initialState= {
    breweries: []
}

const BreweryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_BREWERIES':
            return{
                ...state,
                breweries: action.breweries
            }
            default:
                return state
    }
}
export default BreweryReducer;