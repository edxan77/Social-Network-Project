/* eslint-disable react/react-in-jsx-scope */

import './App.css';
import MainFriends from './Components/MainUserFriends/MainUserFriendList';
import Friendlist from './Components/FriendList/Friendlist';

function App() {
  return (
    <div>
      <MainFriends />
      <Friendlist />
    </div>
  );
}

export default App;
