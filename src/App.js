import React, {useEffect} from 'react'
import Routes from './Routes'
import {useDispatch} from 'react-redux'
import {BreweryAction} from './actions/BreweryAction'
import { gatherReviews } from './actions/ReviewAction'
import HeaderComponent from './components/HeaderComponent'
import { profileAction } from './actions/UserProfileAction'


const App = () => {
const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.token)
   { BreweryAction(dispatch)
    gatherReviews(dispatch)
  profileAction(dispatch) }
}, [])


  return (
    <div >
      <div>
            <HeaderComponent />
      </div>
      <Routes />
    
    </div>
  )
}

export default App
