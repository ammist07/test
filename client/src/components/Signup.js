import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Signup = () => {
    return (
        <div>
            <TextField id="filled-basic" label="name" variant="filled" required/>
            <TextField id="filled-basic" label="username" variant="filled" required/>
            <TextField id="filled-basic" label="password" variant="filled" required/>
            <Button variant="contained">Signup</Button>
        </div>
    )
}

export default Signup