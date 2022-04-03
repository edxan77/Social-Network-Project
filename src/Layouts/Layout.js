import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { AuthProvider } from '../AuthProvider/AuthProvider';
import { Provider } from 'react-redux';
import UserPage from '../pages/UserPage';
import store from '../store/index'


function Layout() {

    return (
      <AuthProvider>
        <div >
          <Routes>
  
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />}/>
            <Route path='/userpage' element={<Provider store={store}><UserPage /></Provider>}/>
        
          </Routes>
        </div>
      </AuthProvider>
    )
  }
  
  export default Layout;