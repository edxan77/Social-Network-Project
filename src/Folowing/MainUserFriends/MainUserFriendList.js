/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState, useRef, useContext, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Button, ListItemText, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SmsIcon from '@mui/icons-material/Sms';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { firebase } from '../../lib/firebase';
import { updateDoc, doc, collection, onSnapshot } from 'firebase/firestore';
import { Followcontext } from '../../Folowing/followprovider/FollowProvider';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './mainUserFriendList.css';

function MainUserFriendList() {
  const [clicked, setclicked] = useState(false);
  const ref = useRef();
  const { currentUser } = useContext(AuthContext);
  const userRef = collection(firebase, 'users');
  const { userInfo, usersInfo, get, setget } = useContext(Followcontext);
  const [followers, setFollowers] = useState([]);
  const [follows, setFollows] = useState([]);
  const [switchBtn, setSwitchBtn] = useState(false);
  const [val, setval] = useState([]);
  const [friends, setfriends] = useState([]);

  const clicking = function () {
    setclicked(!clicked);
    ref.current.scrollTop = 0;
  };

  const folowsload = function () {
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    usersInfo.map((item) => {
      if (item.follows?.includes(userInfo.adress)) {
        setFollowers(function (prev) {
          return [...prev, item];
        });
      }

      return item;
    });
  }, [userInfo]);

  const unfollowing = function (id, data) {
    return async function k() {
      let a = data.filter(function (item) {
        return item != userInfo.id;
      });

      let b = userInfo.follows?.filter(function (item) {
        return item != id;
      });
      setFollows(
        follows.filter(function (i) {
          return i.adress != id;
        })
      );

      const userdoc = doc(firebase, 'users', id);
      const currentuserdoc = doc(firebase, 'users', userInfo.adress);

      await updateDoc(userdoc, { followers: a });
      await updateDoc(currentuserdoc, { follows: b });
    };
  };

  useEffect(() => {
    if (currentUser) {
      const unsubscribe = onSnapshot(userRef, (querySnapshot) => {
        setval(
          querySnapshot.docs.map(function (item) {
            if (
              item.data().followers
                ? item.data().followers.includes(currentUser.uid)
                : null
            ) {
              return { ...item.data(), adress: item._key.path.segments[6] };
            }
          })
        );
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const unsubscribe = onSnapshot(userRef, (querySnapshot) => {
        setfriends(
          querySnapshot.docs.map(function (item) {
            if (
              item.data().follows
                ? item.data().follows.includes(userInfo.adress)
                : null
            ) {
              return { ...item.data(), adress: item._key.path.segments[6] };
            }
          })
        );
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '270px',
        marginTop: 2,
        border: '2px solid #4546A1',
        borderRadius: 2,
        overflow: 'scroll',
      }}
    >
      <List
        sx={{ width: '100%' }}
        ref={ref}
        className={clicked === false ? 'mainlist' : 'mainlist2'}
      >
        <Box
          sx={{
            color: 'rgb(0, 94, 244);',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PeopleOutlineIcon sx={{ marginRight: 1 }} />
          <span
            className="list"
            role="button"
            onClick={clicking}
            onKeyDown={clicking}
            tabIndex={0}
          >
            {' '}
            {switchBtn === false ? (
              <span className="txt">My Followers</span>
            ) : (
              <span className="txt">My Follows</span>
            )}{' '}
          </span>
        </Box>
        <Divider variant="fullWidth" component="li" />

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 1,
          }}
        >
          <span
            className="close"
            role="button"
            onClick={clicking}
            onKeyDown={clicking}
            tabIndex={0}
          >
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{ display: 'flex', justifySelf: 'end', marginLeft: 2 }}
            >
              X
            </Button>
          </span>
          <span>
            {val.filter((i) => {
              return i != undefined;
            }).length === 0 && switchBtn == true
              ? 'No Follows'
              : ''}
          </span>
          <span>
            {friends.filter((i) => {
              return i != undefined;
            }).length === 0 && switchBtn == false
              ? 'No Followers'
              : ''}
          </span>

          <Switch onClick={folowsload} />
        </Box>

        {switchBtn === false && friends
          ? friends.map(function (item, index) {
              if (item) {
                return (
                  <ListItem
                    alignItems="flex-start"
                    className="people"
                    key={index}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src={item ? item.profile_picture : null}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Link
                          to={`/user-profile/${item ? item.id : null}`}
                          // onClick={getinc}
                          className="navlink"
                        >
                          <h3
                          textDecoration='none'
                          >
                            {item ? item.firstName : null}
                          </h3>
                        </Link>
                      }
                      secondary={
                        <Link
                          to={`/user-profile/${item ? item.id : null}`}
                          // onClick={getinc}
                          className="navlink"
                        >
                          <Typography
                          textDecoration='none'
                            sx={{ fontSize: '11px', fontWeight: 'bold',  }}
                          >
                            {item ? item.lastName : null}
                          </Typography>
                        </Link>
                      }
                    />
                    <span className="btn">
                      <SmsIcon />
                    </span>
                  </ListItem>
                );
              }
            })
          : val?.map(function (item, index) {
              if (item != undefined) {
                return (
                  <ListItem
                    alignItems="flex-start"
                    className="people"
                    key={index}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={item.profile_picture} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Link
                          to={`/user-profile/${item.id}`}
                          // onClick={getinc}
                          className="navlink"
                        >
                          <Typography
                            sx={{ fontWeight: 'bold', fontSize: '13px' }}
                          >
                            {item ? item.firstName : ''}
                          </Typography>
                        </Link>
                      }
                      secondary={
                        <Link
                          to={`/user-profile/${item.id}`}
                          // onClick={getinc}
                          className="navlink"
                        >
                          <Typography
                            sx={{ fontSize: '11px', fontWeight: 'bold' }}
                          >
                            {item ? item.lastName : 'e'}
                          </Typography>
                        </Link>
                      }
                    />
                    <span
                      className="btn"
                      onClick={
                        item ? unfollowing(item.adress, item.followers) : null
                      }
                    >
                      <PersonOffIcon className="delete" />
                    </span>
                  </ListItem>
                );
              }
            })}
      </List>
    </Box>
    // </div>
  );
}
export default MainUserFriendList;
