import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

const PrivateRoutes = () => {
    const {user} = useContext(UserContext);
    return(
        user ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes