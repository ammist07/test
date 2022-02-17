import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Button variant="contained" component={Link} to="/signup">Login to Play!</Button>
        </div>
    )
}

export default Home