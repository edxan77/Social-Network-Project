import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import {AuthProvider} from '../AuthProvider/AuthProvider'
import NotFound from '../pages/NotFound/NotFound';
import Welcome from '../Welcome/Welcome';
import Home from '../pages/Home/Home';
import UserProfile from '../pages/UserProfile/UserProfile';
// import RequireAuth from '../components/RequireAuth/RequireAuth';
import Layout from '../components/Layout/Layout';
// import Events from '../pages/Events/Events';
import AnotherUserPage from '../pages/AnotherUserProfile';
import UrlProvider from '../UrlProvider/UrlProvider';
import {FollowProvider} from '../Folowing/followprovider/FollowProvider'
import Friends from '../pages/Friends/Friends';
import Game from '../pages/Game/Game';
import Cards from '../pages/Game/Memory/Cards';
import Rock from '../pages/Game/rock_peper_scissors/rock';
import Board from '../pages/Game/tic tak toy/Board';
// import RedirectProvider from '../RedirectProvider/RedirectProvider';


function MainRoutes(){

    return (
        <AuthProvider>
          <FollowProvider>
          <UrlProvider>
            {/* <RedirectProvider> */}
          
            <Routes>
              <Route path='/' index   element={ <Welcome/>}/>
              <Route  element={<Layout/>}>
              <Route path='home' element={<Home/>}/>
                {/* <Route path='home/:id'  element={<UserProfile/>}/> */}
                <Route path='/:id'  element={<UserProfile/>}/>
                <Route path='user-profile/:id'  element={<AnotherUserPage/>}/>
                <Route path='friends'  element={<Friends/>}/>
                {/* <Route path='events' element={<Events/>}/> */}
                <Route path='games' element={<Game/>}/>
                <Route path='Memory' element={<Cards/>}/>
                <Route path='TicTacToe' element={<Board/>}/>
                <Route path='Rock_Peper_Scissors' element={<Rock/>}/>
                <Route path='notFound' element={<NotFound/>}/>
              </Route>
                <Route path='/login' element={<Login/>} />
                <Route path='register' element={<Register />}/>
            </Routes>
            {/* </RedirectProvider> */}
          </UrlProvider> 
          </FollowProvider>
        </AuthProvider>
      )
}
export default MainRoutes;