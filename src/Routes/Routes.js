import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import {AuthProvider} from '../AuthProvider/AuthProvider'
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import UserProfile from '../pages/UserProfile/UserProfile';
import RequireAuth from '../components/RequireAuth/RequireAuth';
import Layout from '../components/Layout/Layout';


function MainRoutes(){

    return (
        <AuthProvider>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/' index  element={
                <RequireAuth>
                  <Home/>
                </RequireAuth>
                }/>
                <Route path='user-profile' element={<UserProfile/>}/>
                <Route path='user-profile:id' />
             
              </Route>
                <Route path='login' index element={<Login/>} />
                <Route path='register' element={<Register />}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </AuthProvider>
      )
}
export default MainRoutes;