import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext,useEffect } from 'react';
import { RedirectContext } from '../../RedirectProvider/RedirectProvider';

export default function RequireAuth({ children }) {
  const { currentUser } = useContext(AuthContext);
  const {isAllow} = useContext(RedirectContext)
  const location = useLocation();

<<<<<<< HEAD
  if (currentUser === null && isAllow == true) {
=======
  if (currentUser === null && isAllow === false) {
>>>>>>> 15f0978d8c8ef7eed544db7c3e27dbccb976519a
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}