import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { RedirectContext } from '../../RedirectProvider/RedirectProvider';

export default function RequireAuth({ children }) {
  const { currentUser } = useContext(AuthContext);
  const {isAllow} = useContext(RedirectContext)
  const location = useLocation();

  // useEffect(()=>{
  //   if(currentUser===null){
  //     setIsAllow(true)
  //   }else{
  //     setIsAllow(false);
  //   }
  // },[currentUser])

  if (currentUser === null && isAllow === true) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;

}