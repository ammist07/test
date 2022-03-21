import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Board from './components/Board'
import UserProfile from './components/UserProfile'
import { BrowserRouter } from 'react-router-dom'
import { Provider as UserProvider } from './context/UserContext'
import React, { useContext } from 'react'

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
	const username_input = screen.getByRole('textbox', {
		name: 'name username password',
	})
	expect(username_input).toBeInTheDocument()
})

test('Login Page Form', () => {
	render(
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	)
	const username_input = screen.getByRole('textbox', {
		name: 'username password',
	})
	expect(username_input).toBeInTheDocument()
})

test('App Page', () => {
	render(
		<BrowserRouter>
			<UserProvider>
				<App />
			</UserProvider>
		</BrowserRouter>
	)
})

test('Board Page', () => {
	render(
		<BrowserRouter>
			<Board />
		</BrowserRouter>
	)
})

test('UserGreeter salutes a user', () => {
	const state = {
		isAuthenticated: false,
	}
	render(
		<UserProvider value={state}>
			<Board />
		</UserProvider>
	)
	expect(screen.getByText(`Lets Play`)).toBeInTheDocument()
})

test('Home Page', () => {
	render(
		<BrowserRouter>
			<UserProvider>
				<Home />
			</UserProvider>
		</BrowserRouter>
	)
	const playbutton = screen.getByTestId('homebutton')
	expect(playbutton).toBeInTheDocument()
})

test('Cells on Board', () => {
	render(
		<BrowserRouter>
			<Board />
		</BrowserRouter>
	)
	const username_input = screen.getByRole('table')
	expect(username_input).toBeInTheDocument()
})

test('Flower in Cells', () => {
	render(
		<BrowserRouter>
			<Board />
		</BrowserRouter>
	)
	const username_input = screen.getByRole('table', { id: 'icon' })
	expect(username_input).toBeInTheDocument()
})

test('Profile Page test', () => {
	render(
		<BrowserRouter>
			<UserProvider>
				<Home />
			</UserProvider>
		</BrowserRouter>
	)
	const playbutton = screen.getByTestId('profilebutton')
	expect(playbutton).toBeInTheDocument()
})
