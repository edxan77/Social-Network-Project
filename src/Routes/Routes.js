import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import {AuthProvider} from '../AuthProvider/AuthProvider'
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import UserProfile from '../pages/UserProfile/UserProfile'
import RequireAuth from '../components/RequireAuth/RequireAuth';
import Layout from '../components/Layout/Layout';
import Events from '../pages/Events/Events';


function MainRoutes(){

    return (
        <AuthProvider>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/' index  element={
                <RequireAuth>
                  <Home/>
                </RequireAuth>
                // <Home/>
                }/>
                <Route path='user-profile' element={<UserProfile/>}/>
                <Route path='user-profile:id' />
                <Route path='/events' element={<Events/>}/>
                <Route path='notFound' element={<NotFound/>}/>
              </Route>
              {/* <RequireAuth> */}
              <Route path='login' element={<Login/>} />
              {/* </RequireAuth> */}
                <Route path='register' element={<Register />}/>
            </Routes>
        </AuthProvider>
      )
}
export default MainRoutes;