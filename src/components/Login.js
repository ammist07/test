import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <div>
            <TextField id="filled-basic" label="username" variant="filled" required/>
            <TextField id="filled-basic" label="password" variant="filled" required/>
            <Button variant="contained">Login</Button>
        </div>
    )
}

export default Login