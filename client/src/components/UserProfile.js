import React, {useContext} from 'react'
import { Context as UserContext} from '../context/UserContext'

const UserProfile = () => {
    const userContext = useContext(UserContext)
    return (
        <div>
            {userContext.state.user.name}
        </div>
    )
}

export default UserProfile