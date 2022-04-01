/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Provider store={store}><UserPage /></Provider>
  );
}

export default App;
