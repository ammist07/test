import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <TextField id="filled-basic" label="name" variant="filled" required/>
            <TextField id="filled-basic" label="username" variant="filled" required/>
            <TextField id="filled-basic" label="password" variant="filled" required/>
            <Button variant="contained">Signup</Button>
            <Button variant="contained" component={Link} to="/login">Login</Button>
        </div>
    )
}

export default Signup