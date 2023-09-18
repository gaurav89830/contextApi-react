import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
const Profile = () => {
    const {user} = useContext(UserContext);
    if (!user) {
        return <h1>Please Enter Username</h1>
    }
    return <h3>User Name : "{user.username}" | Password "{user.password}"</h3>
}

export default Profile
