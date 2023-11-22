import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuthContext();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default ProtectedRoute;