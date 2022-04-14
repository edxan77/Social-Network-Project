/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState, useRef, useContext, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, ListItemText, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SmsIcon from '@mui/icons-material/Sms';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { firebase } from '../../lib/firebase';
import {
  updateDoc,
  doc,
} from 'firebase/firestore';
import { Followcontext } from '../../Folowing/followprovider/FollowProvider';
import { Link } from 'react-router-dom';
import './mainUserFriendList.css';

function MainUserFriendList() {
  const [clicked, setclicked] = useState(false);
  const ref = useRef();
  // const { currentUser } = useContext(AuthContext);
  // const userRef = collection(firebase, 'users');
  const { userInfo, usersInfo } = useContext(Followcontext);
  const [followers, setFollowers] = useState([]);
  const [follows, setFollows] = useState([]);
  const [switchBtn, setSwitchBtn] = useState(false);

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
      if (item.followers?.includes(userInfo.id)) {
        setFollows(function (prev) {
          return [...prev, item];
        });
      }
      return item;
    });
  }, []);
  

  const unfollowing = function (id, data) {


    return async function k() {

      let a = data.filter(function (item) {
        return item != userInfo.id;
      });

      let b = userInfo.follows?.filter(function (item) {
        return item != id;
      });

      const userdoc = doc(firebase, 'users', id);
      const currentuserdoc = doc(firebase, 'users', userInfo.adress);

      await updateDoc(userdoc, { followers: a });
      await updateDoc(currentuserdoc, { follows: b });
    };
   
  };

  return (
    <div className="blok">
      <List
        ref={ref}
        className={clicked === false ? 'mainlist' : 'mainlist2'}
        sx={{ marginTop: '10px' }}
      >
        <Typography
          sx={{
            marginLeft: '80px',
            position: 'absolute',
            color: 'rgb(0, 94, 244);',
          }}
        >
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
        </Typography>
        <span>
          <PeopleOutlineIcon
            sx={{ marginLeft: '30px', marginTop: '0px', color: 'white' }}
          />
        </span>
        <Divider sx={{ marginLeft: '-20px' }} variant="inset" component="li" />

        {switchBtn === false
          ? followers?.map(function (item, index) {
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
                        to={`user-profile/${item.id}`}
                        // onClick={getinc}
                        className="navlink"
                      >
                        <Typography
                          sx={{ fontWeight: 'bold', fontSize: '13px' }}
                        >
                          {item.firstName}
                        </Typography>
                      </Link>
                    }
                    secondary={
                      <Link
                        to={`user-profile/${item.id}`}
                        // onClick={getinc}
                        className="navlink"
                      >
                        <Typography
                          sx={{ fontSize: '11px', fontWeight: 'bold' }}
                        >
                          {item.lastName}
                        </Typography>
                      </Link>
                    }
                  />
                  <span className="btn">
                    <SmsIcon />
                  </span>
                </ListItem>
              );
            })
          : follows?.map(function (item, index) {
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
                          to={`user-profile/${item.id}`}
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
                          to={`user-profile/${item.id}`}
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

        <span
          className="close"
          role="button"
          onClick={clicking}
          onKeyDown={clicking}
          tabIndex={0}
        >
          <Button variant="contained" color="error" size="small">
            X
          </Button>
        </span>
        <Switch onClick={folowsload} />
      </List>
    </div>
  );
}
export default MainUserFriendList;
