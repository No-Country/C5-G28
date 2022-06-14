import React from 'react';
import { Link } from "react-router-dom";


const UserProfile = () => {
    return (
        <div>
            <h1>Perfil del Usuario</h1>
            <Link to="/configuracion">Configuracion de Usuario</Link>
        </div>
    )
}

export default UserProfile;