import { Outlet, Navigate } from 'react-router-dom'
import context from '../context';
import { useContext } from "react";

const PrivateRoutes = () => {
    const { signed: isLogged } = useContext(context);

    return(
        isLogged ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes