import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Breadcrumb } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReviewCard from './ReviewCard';

const UserProfilePage = (props) => {
    const user = useSelector(state => state.userState.user)
    const reviews = useSelector(state => state.reviewsState.reviews)

    const breweries = (useSelector(state => state.breweriesState.breweries))
    const pathName = props.location.pathname
    const obdb = pathName.split('/')[2]
    const brewery = breweries.find(brew => brew.id === parseInt(obdb))

    console.log(user)

    return (
        <Card style={{ textAlign: 'center' }}>
            <Card.Title >
                <Card.Text><h1>{user.name}'s Profile</h1></Card.Text>
                <Card.Text><p>Email: {user.email}</p></Card.Text>
                <Card.Text><p>Age: {user.age}</p></Card.Text>
                <Card.Text><p>City: {user.hometown}</p></Card.Text><br />

                <Card>
                    {brewery && <ReviewCard {...props} brewery={brewery} />}
                </Card>

            </Card.Title>
     
            <Breadcrumb>
                <Breadcrumb.Item href="/editprofile">Edit Profile</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Delete Profile
                </Breadcrumb.Item>
            </Breadcrumb>
            
        </Card>
    )
};
export default UserProfilePage;