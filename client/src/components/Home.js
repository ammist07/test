import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Button data-testid="homebutton" variant="contained" id="paybutton" component={Link} to="/board">Login to Play!</Button>
            <Button data-testid="profilebutton" variant="contained" id="paybutton2" component={Link} to="/profile">Profile</Button>
        </div>
    )
}

export default Home