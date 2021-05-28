



const rootPage = (props) => {
    return (
        <div className='rootheader'>

            <h1>BUSSIN BREWERIES</h1>
            <button onClick={(e) => {e.preventDefault(); props.history.push('/login') }}>LogIn</button>
            <button onClick={(e) => {e.preventDefault(); props.history.push('/singup') }}>New Profile</button>
        </div>
    )
}
export default rootPage;