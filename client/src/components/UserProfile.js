import React, { useContext } from 'react'
import { Context as UserContext } from '../context/UserContext'

const UserProfile = () => {
	const userContext = useContext(UserContext)
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			Name: <div>{userContext.state.user.name}</div>
			Games Played: {userContext.state.user.games}
		</div>
	)
}

export default UserProfile
