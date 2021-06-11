import React from 'react' 
import useState from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {FilterBreweries} from '../actions/FilterBreweriesAction'


const HeaderComponent = (props) => {
  const dispatch = useDispatch()
  // const breweries = useSelector(state => state.breweriesState.breweries)
    
    return(
        <Navbar bg="dark" variant="dark" >
        <Navbar.Brand href="#home">BUSSIN BREWERIES</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/breweries">Breweries</Nav.Link>
          <Nav.Link href="/userprofilepage">Profile</Nav.Link>
          <Nav.Link href="/logout" >logout</Nav.Link>
          <Nav.Link href="/login">login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    )
}
export default HeaderComponent;
// onChange={(e) => {e.preventDefault(); FilterBreweries(e, dispatch)}}