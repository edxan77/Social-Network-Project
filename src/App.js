/* eslint-disable react/react-in-jsx-scope */
import UserPage from './pages/UserPage';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <UserPage />
    </Provider>
  );
}

export default App;
