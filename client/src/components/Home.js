import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'

const Home = () => {
	const userContext = useContext(UserContext)
	return (
		<div>
			{userContext.state.user ? (
				<Button
					data-testid='homebutton'
					variant='contained'
					id='paybutton'
					component={Link}
					to='/board'
				>
					Play!
				</Button>
			) : (
				<Button
					data-testid='homebutton'
					variant='contained'
					id='paybutton'
					component={Link}
					to='/board'
				>
					Login to Play!
				</Button>
			)}

			<Button
				data-testid='profilebutton'
				variant='contained'
				id='paybutton2'
				component={Link}
				to='/profile'
			>
				Profile
			</Button>
		</div>
	)
}

export default Home
