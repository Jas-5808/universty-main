import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, guestOnly }) => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        return <Navigate to="/" />; 
    }
    if (loggedInUser.role === 'guest' && !guestOnly) {
        return <Navigate to="/clubs" />; 
    }

    return children;
};

export default PrivateRoute;
