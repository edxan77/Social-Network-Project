import React, { useState, useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemText, Typography, Button } from '@mui/material';
import './friend.css';

function Friendlist() {
  const [switching, setswitching] = useState(false);
  const ref = useRef();
  const toggle = function () {
    setswitching(!switching);
    ref.current.scrollTop = 0;
  };
  return (
    <div ref={ref} className={switching === true ? 'ok2' : 'ok'}>
      <List className="tor" sx={{ width: '100%', maxWidth: 360 }}>
        <ListItem alignItems="flex-start" className="item">
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
          <span className="btn"><Button variant="contained" size="small">send</Button></span>
        </ListItem>

        <ListItem alignItems="flex-start" className="item">
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
          <span className="btn"><Button variant="contained" size="small">send</Button></span>
        </ListItem>
        <ListItem className="item" alignItems="flex-start">
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
          <span className="btn"><Button variant="contained" size="small">send</Button></span>
        </ListItem>
        <span
          className={switching === true ? 'more2' : 'more'}
          role="button"
          tabIndex={0}
          onClick={toggle}
          onKeyDown={toggle}
        >
          <Button
            size="small"
            sx={{ color: 'white', marginLeft: '0px', marginTop: '20px' }}
            variant="contained"
            color="warning"
          >
            more
          </Button>
        </span>
        <ListItem className="item" alignItems="flex-start">
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
          <span className="btn"><Button variant="contained" size="small">send</Button></span>
        </ListItem>
        <ListItem className="item" alignItems="flex-start">
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
          <span className="btn"><Button variant="contained" size="small">send</Button></span>
        </ListItem>
        <ListItem className="item" alignItems="flex-start">
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
          <span className="btn"><Button variant="contained" size="small">send</Button></span>
        </ListItem>
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
            color="error"
          >
            X
          </Button>
        </span>
      </List>
    </div>
  );
}

export default Friendlist;
