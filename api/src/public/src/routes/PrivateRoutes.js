import { Outlet, Navigate } from 'react-router-dom';
import { StoreContext } from '../store/storeProvider';
import { useContext } from 'react';

const PrivateRoutes = () => {
    const {user} = useContext(StoreContext);
    
    return(
        user.id ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes