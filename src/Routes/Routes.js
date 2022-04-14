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
import AnotherUserPage from '../pages/AnotherUserProfile';
import UrlProvider from '../UrlProvider/UrlProvider';
import {FollowProvider} from '../Folowing/followprovider/FollowProvider'



function MainRoutes(){

    return (
        <AuthProvider>
          <FollowProvider>
          <UrlProvider>
          
            <Routes>
           
              <Route path='/' element={<Layout/>}>
                <Route path='/' index  element={
                  <RequireAuth>
                  <Home/>
                </RequireAuth>
                }/>
                
                <Route path='/:id' element={<UserProfile/>}/>
                
                <Route path='user-profile/:id' element={<AnotherUserPage/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='notFound' element={<NotFound/>}/>
              </Route>
              <Route path='login' element={<Login/>} />
                <Route path='register' element={<Register />}/>
            </Routes>
           
          </UrlProvider> 
          </FollowProvider>
        </AuthProvider>
      )
}
export default MainRoutes;