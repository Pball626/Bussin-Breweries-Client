

const initialState= {
    breweries: [],
    filteredBreweries: []
}

const BreweryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_BREWERIES':
            console.log(action)
            return{
                ...state,
                breweries: action.breweries
            }
            case 'SINGLE_BREWERY':
                return{
                    ...state,
                    breweries: action.brewery
                }
                case 'FILTERED_BREWERIES':
                    return{
                    ...state,
                    filteredBreweries: action.breweries
                    }
            default:
                return state
    }
}
export default BreweryReducer;