import { useState, useRef, useEffect, useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemText, Typography, Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Divider from '@mui/material/Divider';
import { firebase } from '../../lib/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Followcontext } from '../followprovider/FollowProvider'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-router-dom';
import './friend.css';

function Friendlist() {
  const [switching, setswitching] = useState(false);
  const [val, setval] = useState([]);
  const [friends, setfriends] = useState([]);
  const userRef = collection(firebase, 'users');
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);
  const { userInfo, setUserInfo,get,setget } = useContext(Followcontext);
  
  console.log(userInfo)
  console.log(currentUser)

  useEffect(function () {
    setget(get + 1);
  }, []);

  const toggle = function () {
    setswitching(!switching);
    ref.current.scrollTop = 0;
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef);
      setval(
        data.docs.map(function (item) {
          if (item.data().id == currentUser.uid) {
            setfriends({ ...item.data(), adress: item._key.path.segments[6] });
          }

          return { ...item.data(), adress: item._key.path.segments[6] };
        })
      );
    };
    getUsers();
  }, [get]);

  const gg = function (id, data) {
    return async function k() {
      setUserInfo({ ...userInfo, follows: [...userInfo.follows, id] });
      setget(get + 1);
      console.log(id);
      const userdoc = doc(firebase, 'users', id);
      const currentuserdoc = doc(firebase, 'users', friends.adress);

      await updateDoc(userdoc, { followers: [...data, currentUser.uid] });
      await updateDoc(currentuserdoc, { follows: [...friends.follows, id] });
      
    };
  };

  const getinc = function (){
    setget(get+1)
  }
console.log(currentUser)
  return (
    <div ref={ref} className= 'ok2'>
      <List className="tor" sx={{ width: '100%', maxWidth: 360 }}>
        <Typography
          sx={{
         
            marginLeft: '40px',
            position: 'absolute',
            color: 'rgb(0, 94, 244);',
          }}
        >
          <span className='title'>May Be Know</span>
        </Typography>
        <PeopleOutlineIcon sx={{ marginLeft: '30px', marginTop: '0px' }} />
        <Divider sx={{ marginLeft: '-20px' }} variant="inset" component="li" />
        {val.map(function (item, index) {
          return (
            <div key={index}>
              <ListItem alignItems="flex-start" className="item" key={index}>
                <ListItemAvatar sx={{marginTop:'15px'}}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                sx={{marginTop:'15px',fontSize:'10px'}}
                  primary={
                    <Link to={`user-profile/${item.id}`} onClick={getinc} className="navigate">
                    <Typography sx={{ fontWeight: 'bold', Size: '5px' }}>
                      {item.firstName}
                    </Typography>
                    </Link>
                  }
                  secondary={
                    <Link to={`user-profile/${item.id}`} onClick={getinc} className="navigate">
                    <Typography sx={{ fontSize: '11px', fontWeight: 'bold'}}>
                      {item.lastName}
                    </Typography>
                    </Link>
                  }
                />
                <span className="btn" onClick={gg(item.adress, item.followers)}>
                  <Button
                  
                    variant={
                      userInfo.follows.includes(item.adress)
                        ? 'outlined'
                        : 'contained'
                    }
                    size="small"
                  >
                    {userInfo.follows.includes(item.adress) ? (
                      <PersonOutlineIcon />
                    ) : (
                      <PersonAddIcon />
                    )}
                  </Button>
                </span>
              </ListItem>
            </div>
          );
        })}

        <span
          className="more"
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyDown={toggle}
        >
          <Button
            size="small"
            sx={{ color: 'white', marginLeft: '-5px', marginTop: '20px' }}
            variant="contained"
            color="warning"
          >
            <ArrowUpwardIcon />
          </Button>
        </span>
      </List>
    </div>
  );
}

export default Friendlist;