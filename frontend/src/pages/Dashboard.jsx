import React from 'react'
import { useAuth } from '../context/authContext'

const Dashboard = () => {

    const { user } = useAuth();

    return (
        <div>¡Bienvenido, {user.full_name}!</div>
    )
}

export default Dashboard