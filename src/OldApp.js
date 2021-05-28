// import './App.css';
// import React from 'react'
// import LogIn from './LogIn'
// import BreweryContainer from './containers/BreweryContainer'
// import NewUserForm from './components/NewUserForm'
// import UserProfilePage from './components/UserProfilePage'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter,
//   Redirect
// } from "react-router-dom";

// class App extends React.Component {

//   state = {
//     allBreweries: [],
//     allUsers: [],
//     currentuser: {},
//     currentPage: {}
//   }

//   handleLogIn = (e) => {
//     e.preventDefault()
//     let user = {
//       email: e.target[0].value,
//       password: e.target[1].value
//     }

//     let reqPackage = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${localStorage.token}`
//       },
//       body: JSON.stringify({ auth: user })
//     }

//     fetch('http://localhost:3000/api/v1/login', reqPackage)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         localStorage.setItem('token', data.token)
//         this.setState({
//           currentUser: data
//         })
//         console.log(this.state.currentUser)
//       })
//   }

//   componentDidMount() {
//     console.log('component mounted')
//     this.getBreweries()
//   }

//   getBreweries = () => {
//     fetch('http://localhost:3000/api/v1/brewerieslist', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//       .then(res => res.json())
//       .then(data => this.setState({
//         allBreweries: data
//       }))
//   }

//   newUser = (newuser) => {

//     let reqPackage = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${localStorage.token}`
//       },
//       body: JSON.stringify(newuser)
//     }

//     fetch('http://localhost:3000/api/v1/users', reqPackage)
//       .then(res => res.json())
//       .then(data => this.setState({
//         allUsers: [...this.state.allUsers, data],
//         currentPage: <Redirect to='/Login' />
//       }))
//   }

//   getUsers = () => {
//     fetch('http://localhost:3000/api/v1/users', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${localStorage.token}`
//       }
//     })
//       .then(res => res.json())
//       .then(data => this.setState({
//         allUsers: data
//       }))
//   }

//   deleteProfile=(profile)=>{
//     console.log('delete this', profile)
//     fetch(`http://localhost:3000/api/v1/users/${profile.id}`,{
//       method: 'DELETE',
//     })
//     this.setState({
//       allUsers: this.state.allUsers.filter((user => {
//         return user !== profile
//       }))
//     })
//   }

//   setUser = (name) => {
//     let user = this.state.allUsers.filter(user => user.name === name)[0]
//     console.log(user)
//     this.setState({
//       currentUser: user
//     })
//   }


//   render() {
//     return (
//       <div>
//         < BrowserRouter >
//           <nav>
//             <ul>
//               <li>
//                 <Link to='/login'>LogIn</Link>
//               </li>
//               <li>
//                 <Link to='/breweries'>Breweries</Link>
//               </li>
//               <li>
//                 <Link to='/newUser'>Create Profile</Link>
//               </li>
//               <li>
//                 <Link to='/userprofile'>Profile</Link>
//               </li>
//             </ul>
//           </nav>

//           <Switch>
//             <Route exact path='/login'>
//               <LogIn handleLogIn={this.handleLogIn} />
//             </Route>
//             <Route exact path='/breweries'>
//               <BreweryContainer allBreweries={this.state.allBreweries} />
//             </Route>
//             <Route exact path='/newUser'>
//               <NewUserForm newUser={this.newUser} />
//             </Route>
//             <Route exact path='/userprofile'>
//               <UserProfilePage user={this.state.currentuser} />
//             </Route>
//           </Switch>

//         </BrowserRouter >
//       </div>
//     );
//   }
// }
// export default App;