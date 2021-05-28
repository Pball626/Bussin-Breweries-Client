import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import BreweriesContainer from './BreweriesContainer'
import Newuser from './components/NewUser'
import ReviewForm from './components/ReviewForm'
import ClickedBrewery from './components/ClickedBrewery'
import Root from './components/Root'

const Routes = (props) => {

    return (
        <div>
            <Router >
                <Switch>
                    <Route path ='/login' exact component = {props => <LogIn {...props} />} />
                    <Route path ='/home' exact component = {props => <Home {...props} />} />
                    <Route path ='/signup' exact component = {props => <Newuser {...props} />} />
                    <Route path ='/breweries' exact component = {props => <BreweriesContainer {...props} />} />
                    {/* <Route path='/updateprofile' exact component = {props => <UpdateUser {...props} />} /> */}
                    <Route path ='/reviewpage' exact component = {props => <ReviewForm {...props} />} />
                    <Route path ='/brewery' exact component = {props => <ClickedBrewery {...props} />} />
                    <Route path ='/boulderbeerco' exact component = {props => <ClickedBrewery {...props} />} />
                    <Route path ='/' exact component = {props => <Root {...props} />} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
