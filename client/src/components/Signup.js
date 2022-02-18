import React, {useState, useContext} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import apis from '../api'
import { Context as UserContext} from '../context/UserContext'

const Signup = () => {
    let navigate = useNavigate()
    const userContext = useContext(UserContext)
    const [form, setForm] = useState({
        name:'',
        username:'',
        password:''
    })
    const formSubmit = async (e) => {
        e.preventDefault()
        const user = await apis.insertUser({form})
        await userContext.setIsAuthenticated(true)
        await userContext.setUser({user})
        navigate('/board')
    }
    const handleInputChange =  async (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }) )
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <TextField name="name" onChange={handleInputChange} value={form.name} id="filled-basic" label="name" variant="filled" required/>
                <TextField name="username" onChange={handleInputChange} value={form.username} id="filled-basic" label="username" variant="filled" required/>
                <TextField name="password" onChange={handleInputChange} value={form.password} id="filled-basic" label="password" variant="filled" required/>
                <Button type="submit" variant="contained">Signup</Button>
                <Button variant="contained" component={Link} to="/login">Login</Button>
            </form>
        </div>
    )
}

export default Signup
