/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemText, Typography, Button, Box } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Divider from '@mui/material/Divider';
import { firebase } from '../../lib/firebase';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Followcontext } from '../followprovider/FollowProvider';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';

function Friendlist() {
  const [switching, setswitching] = useState(false);
  const [val, setval] = useState([]);
  const [friends, setfriends] = useState([]);
  const userRef = collection(firebase, 'users');
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);
  const { userInfo, setUserInfo, get, setget } = useContext(Followcontext);
  const [srchvalue, setsrchvalue] = useState('');
  const [srchclick, setsrchclick] = useState(0);
  const [rotClick, setRotClick] = useState(false);

  useEffect(function () {
    setget(get + 1);
  }, []);

  const toggle = function () {
    setswitching(!switching);
    ref.current.scrollTop = 0;
  };
  useEffect(() => {
    if (currentUser) {
      const unsubscribe = onSnapshot(userRef, (querySnapshot) => {
        setval(
          querySnapshot.docs.map(function (item) {
            if (item.data().id == currentUser?.uid) {
              setfriends({
                ...item.data(),
                adress: item._key.path.segments[6],
              });
            }
            return { ...item.data(), adress: item._key.path.segments[6] };
          })
        );
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

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

  const getinc = function () {
    setget(get + 1);
  };

  const search = function () {
    setsrchclick(srchclick + 1);
    if (srchclick % 2 !== 0) {
      setsrchvalue('');
    }
  };

  return (
    <Box
    ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '270px',
        marginTop: 2,
        overflow: 'scroll',
        borderRadius: 2,
        border: '2px solid #4546A1',   
      }}
    >
      <List className="tor" sx={{ width: '100%' }}>
        <Box
     
          sx={{
            display: 'flex',
            color: 'rgb(0, 94, 244);',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <PeopleOutlineIcon sx={{marginRight: 1 }}/>
          <span className="title" onClick={() => setRotClick(!rotClick)}>
            May Be Know
          </span>
        </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        marginTop: 1
      }}>
        <span style={{ cursor: 'pointer', }} onClick={search}>
          {srchclick % 2 == 0 ? (
            <SearchIcon sx={{color: 'blue'}} />
          ) : (
            <SearchOffIcon sx={{ color: 'red' }} />
          )}{' '}
        </span>
        <input
        style={{border: 'none', padding: 3, borderRadius: 3}}
          className={srchclick % 2 == 0 ? 'input' : 'input2'}
          onChange={(e) => setsrchvalue(e.target.value.replace(/\s/g, ''))}
        ></input> 
       
        </Box>
        <Divider variant="fullWidth" component="li" />
<Box sx={{
  display: 'flex',
  flexDirection: 'column',
width: '100%'
}}>
        {srchvalue && val
          ? val
              .filter((i) => {
                let name = i.firstName + i.lastName;
                let name2 = i.lasttName + i.firstName;
                return name
                  ? name.toLowerCase().includes(srchvalue.toLowerCase())
                  : null || name2
                  ? name2.toLowerCase().includes(srchvalue.toLowerCase())
                  : null;
              })
              .map(function (item, index) {
                return (
                  <div key={index}>
                    <ListItem
                      alignItems="flex-start"
                      className="item"
                      key={index}
                    >
                      <ListItemAvatar sx={{}}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ fontSize: '10px' }}
                        primary={
                          <Link
                            to={`/user-profile/${item.id}`}
                            onClick={getinc}
                            className="navigate"
                          >
                            <Typography variant='caption'
                            >
                              {item.firstName}
                            </Typography>
                          </Link>
                        }
                        secondary={
                          <Link
                            to={`/user-profile/${item.id}`}
                            onClick={getinc}
                            className="navigate"
                          >
                            <Typography variant='caption'
                            >
                              {item.lastName}
                            </Typography>
                          </Link>
                        }
                      />
                      <span
                        className="btn"
                        onClick={gg(item.adress, item.followers)}
                      >
                        <Button
                          variant={
                            userInfo?.follows.includes(item.adress)
                              ? 'outlined'
                              : 'contained'
                          }
                          size="small"
                        >
                          {userInfo?.follows.includes(item.adress) ? (
                            <PersonOutlineIcon />
                          ) : (
                            <PersonAddIcon />
                          )}
                        </Button>
                      </span>
                    </ListItem>
                  </div>
                );
              })
          : val.map((item, index) => {
              return (
                <div key={index}>
                  <ListItem
                    alignItems="flex-start"
                    className="item"
                    key={index}
                  >
                    <ListItemAvatar sx={{}}>
                      <Avatar alt="Remy Sharp" src={item.profile_picture} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ fontSize: '10px' }}
                      primary={
                        <Link
                          to={`/user-profile/${item.id}`}
                          onClick={getinc}
                          className="navigate"
                        >
                          <Typography >
                            {item.firstName}
                          </Typography>
                        </Link>
                      }
                      secondary={
                        <Link
                          to={`/user-profile/${item.id}`}
                          onClick={getinc}
                          className="navigate"
                        >
                          <Typography
                          >
                            {item.lastName}
                          </Typography>
                        </Link>
                      }
                    />
                    <span
                      className="btn"
                      onClick={gg(item.adress, item.followers)}
                    >
                      <Button
                        variant={
                          userInfo?.follows?.includes(item.adress)
                            ? 'outlined'
                            : 'contained'
                        }
                        size="small"
                      >
                        {userInfo?.follows?.includes(item.adress) ? (
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
<Box sx={{
  display: 'flex',
  width: '100%',
  justifyContent: 'center'
}} >
        <span
          className="more"
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyDown={toggle}
        >
          <Button
            size="small"
            sx={{ color: 'white' }}
            variant="contained"
            color="warning"
          >
            <ArrowUpwardIcon />
          </Button>
        </span>
        </Box>
        </Box>
      </List>
    </Box>
  );
}

export default Friendlist;
