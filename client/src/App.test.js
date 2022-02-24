import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'

test('Login Page', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
})

test('Signup Page', () => {
    render(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    )
})

test('Signup Page Form', () => {
    render(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    )
    const username_input = screen.getByRole('textbox', { name: 'name username password'})
    expect(username_input).toBeInTheDocument()
})

test('Login Page Form', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
    const username_input = screen.getByRole('textbox', { name: 'username password'})
    expect(username_input).toBeInTheDocument()
})

test('App Page', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
})

test('Home Page', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
    const playbutton = screen.getByRole('link', { id: 'playbutton'})
    expect(playbutton).toBeInTheDocument()
})