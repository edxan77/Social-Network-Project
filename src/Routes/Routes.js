import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import {AuthProvider} from '../AuthProvider/AuthProvider'
import NotFound from '../pages/NotFound/NotFound';

function MainRoutes(){
    return (
        <AuthProvider>
            <Routes>
              <Route path='/'/>
              <Route path='user-profile'/>
              <Route path='login' element={<Login/>} />
              <Route path='register' element={<Register />}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </AuthProvider>
      )
}
export default MainRoutes;