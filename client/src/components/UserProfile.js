import { Stack, Typography, Paper } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Context as UserContext } from '../context/UserContext'
import TimeDisplay from './TimeDisplay'
import apis from '../api'

const UserProfile = () => {
	const userContext = useContext(UserContext)
	const [done, setDone] = useState(false)
	const [lb, setLB] = useState([])

	const getData = async () => {
		const res = await apis.getAll({
			userId: userContext.state.user.id,
		})
		setLB(res.data)
	}

	useEffect(() => {
		getData()
		setDone(true)
	}, [])
	return (
		<div>
			{done ? (
				<Paper
					elevation={3}
					sx={{
						padding: 5,
						backgroundColor: '#1E293B',
						color: 'white',
					}}
				>
					<Stack spacing={5} direction='row'>
						<Typography variant='h5'>
							Name: {userContext.state.user.name}
						</Typography>
						<Typography variant='h5'>
							Games Played: {userContext.state.user.games}
						</Typography>
						<Paper
							elevation={3}
							sx={{
								padding: 5,
								backgroundColor: '#1E293B',
								color: 'white',
							}}
						>
							<Stack spacing={2} direction='column'>
								<Stack spacing={2} direction='row'>
									<Typography variant='h6'>
										Game Time
									</Typography>
									<Typography variant='h6'>Date</Typography>
								</Stack>
								{lb.map((l, i) => (
									<Stack key={i} spacing={5} direction='row'>
										<Typography>
											{<TimeDisplay time={l.gameTime} />}
										</Typography>
										<Typography>
											{new Date(
												l.playedAt
											).toLocaleString()}
										</Typography>
									</Stack>
								))}
							</Stack>
						</Paper>
					</Stack>
				</Paper>
			) : (
				<Typography variant='h5'>Loading...</Typography>
			)}
		</div>
	)
}

export default UserProfile
