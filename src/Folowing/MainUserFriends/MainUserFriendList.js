import './mainUserFriendList.css';
import React, { useState, useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, ListItemText, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SmsIcon from '@mui/icons-material/Sms';
import Divider from '@mui/material/Divider';

function MainUserFriendList() {
  const [clicked, setclicked] = useState(false);
  const ref = useRef();

  const clicking = function () {
    setclicked(!clicked);
    ref.current.scrollTop = 0;
  };
  return (
    <div className="blok">
      <List ref={ref} className={clicked === false ? 'mainlist' : 'mainlist2'} sx={{ marginTop: '10px' }}>
        <Typography
          sx={{
            marginLeft: '80px',
            position: 'absolute',
            color: 'rgb(0, 94, 244);',
          }}
        >
          <span role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0}> My Friends </span>
        </Typography>
        <PeopleOutlineIcon sx={{ marginLeft: '30px', marginTop: '0px', color: 'white' }} />
        <Divider sx={{ marginLeft: '-20px' }} variant="inset" component="li" />
        <ListItem alignItems="flex-start" className="people">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                Edgar
              </Typography>
            )}
            secondary={(
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                Khanamiryan
              </Typography>
            )}
          />
          <span className="btn">
            <SmsIcon />
          </span>
        </ListItem>

        <ListItem alignItems="flex-start" className="people">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                Dianna
              </Typography>
            )}
            secondary={(
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                Paronyan
              </Typography>
            )}
          />
          <span className="btn">
            <SmsIcon />
          </span>
        </ListItem>
        <ListItem alignItems="flex-start" className="people">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                Taron
              </Typography>
            )}
            secondary={(
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                Hovhannisyan
              </Typography>
            )}
          />
          <span className="btn">
            <SmsIcon />
          </span>
        </ListItem>
        <ListItem alignItems="flex-start" className="people">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                Bagrat
              </Typography>
            )}
            secondary={(
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                Grigoryan
              </Typography>
            )}
          />
          <span className="btn">
            <SmsIcon />
          </span>
        </ListItem>
        <ListItem alignItems="flex-start" className="people">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                Name
              </Typography>
            )}
            secondary={(
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                Surname
              </Typography>
            )}
          />
          <span className="btn">
            <SmsIcon />
          </span>
        </ListItem>
        <ListItem alignItems="flex-start" className="people">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                Sargis
              </Typography>
            )}
            secondary={(
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                Abovyan
              </Typography>
            )}
          />
          <span className="btn">
            <SmsIcon />
          </span>
        </ListItem>
        <ListItem alignItems="flex-start" className="people">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                Sargis
              </Typography>
            )}
            secondary={(
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                Abovyan
              </Typography>
            )}
          />
          <span className="btn">
            <SmsIcon />
          </span>
        </ListItem>
        <span className="close" role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0}><Button variant="contained" color="error" size="small">X</Button></span>
      </List>
    </div>
  );
}
export default MainUserFriendList;
