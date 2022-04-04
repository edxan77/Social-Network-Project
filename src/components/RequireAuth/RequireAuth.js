// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { useContext } from 'react';

// export default function RequireAuth({ children }) {
// const { currentUser } = useContext(AuthContext);
//   const location = useLocation();

//   if (currentUser === true) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }