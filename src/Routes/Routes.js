import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import {AuthProvider} from '../AuthProvider/AuthProvider'

function MainRoutes(){
    return (
        <AuthProvider>
          <div >
            <Routes>
    
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register />}/>
          
            </Routes>
          </div>
        </AuthProvider>
      )
}
export default MainRoutes;