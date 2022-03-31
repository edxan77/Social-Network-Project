import { AppBar,   Container, Toolbar, Typography, } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles"
import { Paper, InputBase, IconButton, Button} from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root:{
    justifyContent: "space-between",
  }
});
export default function Header() {
  const classes = useStyles()
   return (
     <AppBar position="static" color="primary">
       <Container maxWidth="md">
         <Toolbar className={classes.root}>
           <Typography variant="h6" color="inherit">
             Material UI Demo
           </Typography>
           <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
             <Toolbar>
            <Button variant="contained">Sign up</Button>
            <Button variant="contained">Sign in</Button>
            </Toolbar>
         </Toolbar>
       </Container>
     </AppBar>
   );
 }

