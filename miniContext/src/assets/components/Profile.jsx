import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
const Profile = () => {
    const {user} = useContext(UserContext);
    if (!user) {
        return <h1>Please Enter Username</h1>
    }
    return <h3>Sorry!,User "{user.username}" already has password "{user.password}"</h3>
}

export default Profile
