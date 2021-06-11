import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import BreweriesContainer from './BreweriesContainer'
import Newuser from './components/NewUser'
import LogOut from './components/LogOut'
import ClickedBrewery from './components/ClickedBrewery'
import Root from './components/Root'
import {useSelector} from 'react-redux'
import UserProfilePage from './components/UserProfilePage'
import Header from './components/HeaderComponent'
import EditUser from './components/EditUser'

const Routes = (props) => {
    const route = `/${props.brewerylink}`
    
    return (
        <div>
            <Router >
                <Switch>
                    <Route path ='/login' exact component = {props => <LogIn {...props} />} />
                    <Route path ='/home' exact component = {props => <Home {...props} />} />
                    <Route path ='/signup' exact component = {props => <Newuser {...props} />} />
                    <Route path ='/logout' exact component = {props => <LogOut {...props} />} />
                    <Route exact path ='/breweries'  component = {props => <BreweriesContainer {...props} />} />
                    <Route path='/editprofile' exact component = {props => <EditUser {...props} />} />
                    {/* <Route path ='/reviewpage' exact component = {props => <ReviewForm {...props} />} /> */}
                    {/* <Route path ='/brewery' exact component = {props => <ClickedBrewery {...props} />} /> */}
                    <Route path ='/boulderbeerco' exact component = {props => <ClickedBrewery {...props} />} />
                    <Route path ='/' exact component = {props => <Root {...props} />} />
                    <Route path ='/breweries/:api_id' exact component = {props => <ClickedBrewery {...props}/>} />
                    <Route path ='/userprofilepage' exact component = {props => <UserProfilePage {...props}/>} />
                    <Route path ='/header' exact component = {props => <Header {...props}/>} />
                    {/* <Route path ='/filterbreweries' exact component = {props => <FilterBreweries {...props}/>} /> */}
                </Switch>
            </Router>
        </div>
    )
}
// singlebrewery={filteredBrewery[0]
export default Routes
