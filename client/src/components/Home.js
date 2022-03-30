import React, { useContext, useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Context as UserContext } from '../context/UserContext'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const Home = () => {
	const [diff, setDiff] = useState(3)
	const [done, setDone] = useState(true)
	const userContext = useContext(UserContext)

	const handleChange = async (event) => {
		event.preventDefault()
		setDone(false)
		await setDiff(parseInt(event.target.value))
	}
	useEffect(() => {
		userContext.setX(diff)
		setDone(true)
	}, [diff])

	const main = (
		<React.Fragment>
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
				<br />
				<br />
				<br />
				{userContext.state.isAuthenticated ? (
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue={3}
						name='radio-buttons-group'
						value={diff}
						onChange={handleChange}
					>
						<FormControlLabel
							value={3}
							control={<Radio />}
							label='Easy'
						/>
						<FormControlLabel
							value={4}
							control={<Radio />}
							label='Medium'
						/>
						<FormControlLabel
							value={5}
							control={<Radio />}
							label='Hard'
						/>
					</RadioGroup>
				) : null}
			</div>
		</React.Fragment>
	)

	return <div>{done ? main : <div>Loading..</div>}</div>
}

export default Home
