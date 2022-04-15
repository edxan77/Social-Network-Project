import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { RedirectContext } from '../../RedirectProvider/RedirectProvider';

export default function RequireAuth({ children }) {
  const { currentUser } = useContext(AuthContext);
  const {isAllow} = useContext(RedirectContext)
  const location = useLocation();

  if (currentUser === null && isAllow === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}