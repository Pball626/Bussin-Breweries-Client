
import {useSelector} from 'react-redux'

const ClickedBrewery = (props) => {
    const currentBrewery = (useSelector(state => state.breweriesState.breweries))

    return (
        <div>
            <div>
                <h1>{props.brewery.name}</h1>
            </div>
        </div>
    )
}
export default ClickedBrewery;