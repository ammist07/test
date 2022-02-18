import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({
        username:'',
        password:''
    })

    const formSubmit = (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }) )
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <TextField
                    id="filled-basic"
                    label="username"
                    name="username"
                    value={form.username}
                    variant="filled"
                    required
                    onChange={handleInputChange}
                />
                <TextField
                    id="filled-basic"
                    label="password"
                    variant="filled"
                    name="password"
                    value={form.password}
                    required
                    onChange={handleInputChange}
                />
                <Button type="submit" variant="contained">Login</Button>
                <Button variant="contained" component={Link} to="/signup">
                    Signup
                </Button>
            </form>
        </div>
    )
}

export default Login
